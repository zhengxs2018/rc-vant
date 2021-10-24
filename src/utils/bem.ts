import type { Argument } from 'classnames'
import { explode } from './implode-explode'

/**
 * bem helper
 *
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export type Mod = string | { [key: string]: any };

export type Mods = Mod | Mod[];

function gen(name: string, mods?: Mods): string {
  if (mods == null) return ''
  if (typeof mods === 'string') return ` ${name}--${mods}`

  if (Array.isArray(mods)) {
    return mods.reduce<string>((ret, item) => ret + gen(name, item), '');
  }

  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? gen(name, key) : ''), '');
}

export interface BEM {
  (): string
  (el: string): string
  (mods: Mods): string
  (el: string, mods: Mods): string
}

export function createBEM(name: string): BEM {
  return (el?: Mods, mods?: Mods) => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;
    return `${el}${gen(el, mods)}`;
  };
}

/**
 * 状态
 *
 * @public
 *
 * @param namespace - 命名空间
 * @param args      - 参数列表
 *
 * @returns CSS类名列表
 *
 * @example <caption>单参</caption>
 *
 * ```ts
 * state('is', 'loading')
 * // -> "is-loading"
 *
 * state('is', ['loading', 'disabled'])
 * // -> ["is-loading", "is-disabled"]
 *
 * state('is', { loading: true, disabled: false })
 * // -> ["is-loading"]
 * ```
 *
 * @example <caption>多参数</caption>
 *
 * ```ts
 * state('is', { loading: true, disabled: false }, 'demo', [['doc']], null, undefined, false)
 * // -> ["is-loading", "is-demo", "is-doc"]
 * ```
 */
export function state(prefix: string, ...args: Argument[]): string {
  return explode(prefix, args, '-')
}

/**
 * 状态别名
 *
 * @public
 *
 * @param args - 参数列表
 *
 * @returns CSS类名列表
 *
 * @example <caption>单参</caption>
 *
 * ```ts
 * is('loading')
 * // -> "is-loading"
 *
 * is(['loading', 'disabled'])
 * // -> ["is-loading", "is-disabled"]
 *
 * is({ loading: true, disabled: false })
 * // -> ["is-loading"]
 * ```
 *
 * @example <caption>多参数</caption>
 *
 * ```ts
 * is({ loading: true, disabled: false }, 'demo', [['doc']], null, undefined, false)
 * // -> ["is-loading", "is-demo", "is-doc"]
 * ```
 */
export function is(...args: Argument[]): string {
  return state('is', args)
}

/**
 * 状态别名
 *
 * @public
 *
 * @param args - 参数列表
 *
 * @returns CSS类名列表
 *
 * @example <caption>单参</caption>
 *
 * ```ts
 * has('success')
 * // -> "has-success"
 *
 * has(['success', 'error'])
 * // -> ["has-success", "has-error"]
 *
 * has({ success: true, error: false })
 * // -> ["has-success"]
 * ```
 *
 * @example <caption>多参数</caption>
 *
 * ```ts
 * has({ success: true, error: false }, 'demo', [['doc']], null, undefined, false)
 * // -> ["has-success", "has-demo", "has-doc"]
 * ```
 */
export function has(...args: Argument[]): string {
  return state('has', args)
}
