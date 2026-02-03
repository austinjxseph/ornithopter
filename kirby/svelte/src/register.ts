import { mount, unmount } from 'svelte';
import type { Component } from 'svelte';

/**
 * Registers a Svelte 5 component as a custom element.
 *
 * Supports two methods of passing props:
 * 1. Attributes on the element (with automatic JSON parsing)
 * 2. A sibling <script type="application/json" data-for="[id]"> element
 */
export function registerSvelteElement(
  tag: string,
  ComponentClass: Component<any>,
  propNames: string[] = []
) {
  class SvelteElement extends HTMLElement {
    private _component: Record<string, any> | null = null;

    connectedCallback() {
      // Guard against double-mounting
      if (this._component) return;

      // Clear any existing content
      this.innerHTML = '';

      // Try to get props from a sibling script tag first (avoids attribute duplication)
      let props: Record<string, any> = {};
      const id = this.getAttribute('id');

      if (id) {
        const script = document.querySelector(`script[data-for="${id}"]`);
        if (script) {
          try {
            props = JSON.parse(script.textContent || '{}');
            script.remove();
          } catch (e) {
            console.warn(`Failed to parse JSON props for #${id}:`, e);
          }
        }
      }

      // Fallback to attributes if no script tag props found
      if (Object.keys(props).length === 0) {
        for (const name of propNames) {
          const attr = this.getAttribute(name);
          if (attr !== null) {
            // Try to parse as JSON (for arrays/objects), fall back to string
            try {
              props[name] = JSON.parse(attr);
            } catch {
              props[name] = attr;
            }
          }
        }
      }

      // Mount the Svelte 5 component
      this._component = mount(ComponentClass, {
        target: this,
        props
      });
    }

    disconnectedCallback() {
      if (this._component) {
        unmount(this._component);
        this._component = null;
      }
    }
  }

  customElements.define(tag, SvelteElement);
}
