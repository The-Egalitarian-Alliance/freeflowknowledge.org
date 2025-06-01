
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const QT_ACCESSIBILITY: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const HISTCONTROL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const CONDA_EXE: string;
	export const _CE_M: string;
	export const rvm_prefix: string;
	export const HISTSIZE: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const NODE_OPTIONS: string;
	export const LC_ADDRESS: string;
	export const JAVA_HOME: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config_verify_deps_before_run: string;
	export const rvm_stored_umask: string;
	export const CINNAMON_VERSION: string;
	export const npm_config__jsr_registry: string;
	export const MY_RUBY_HOME: string;
	export const ANDROID_SDK_HOME: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const RUBY_VERSION: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const rvm_version: string;
	export const rvm_user_install_flag: string;
	export const PNPM_HOME: string;
	export const GPG_AGENT_INFO: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const GJS_DEBUG_TOPICS: string;
	export const GDM_LANG: string;
	export const HOME: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const WEBKIT_DISABLE_DMABUF_RENDERER: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const JEKYLL_GITHUB_TOKEN: string;
	export const INIT_CWD: string;
	export const CHROME_DESKTOP: string;
	export const npm_lifecycle_script: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const rvm_bin_path: string;
	export const GEM_PATH: string;
	export const GEM_HOME: string;
	export const LESSCLOSE: string;
	export const XDG_SESSION_CLASS: string;
	export const ANDROID_HOME: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const _CE_CONDA: string;
	export const LESSOPEN: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const NDK_HOME: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const ENVIRONMENT: string;
	export const CONDA_SHLVL: string;
	export const rvm_loaded_flag: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const CHROME_EXECUTABLE: string;
	export const LC_TELEPHONE: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const PAPERSIZE: string;
	export const npm_config_user_agent: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const CONDA_PYTHON_EXE: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const BUN_INSTALL: string;
	export const ANALYZER_STATE_LOCATION_OVERRIDE: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const GTK3_MODULES: string;
	export const GCC_COLORS: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const npm_config_node_linker: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const GDMSESSION: string;
	export const HISTFILESIZE: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_registry: string;
	export const IRBRC: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const rvm_path: string;
	export const LC_NUMERIC: string;
	export const GOPATH: string;
	export const TERM_PROGRAM: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		QT_ACCESSIBILITY: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		HISTCONTROL: string;
		TERM_PROGRAM_VERSION: string;
		GNOME_DESKTOP_SESSION_ID: string;
		CONDA_EXE: string;
		_CE_M: string;
		rvm_prefix: string;
		HISTSIZE: string;
		LANGUAGE: string;
		NODE: string;
		NODE_OPTIONS: string;
		LC_ADDRESS: string;
		JAVA_HOME: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		npm_config_verify_deps_before_run: string;
		rvm_stored_umask: string;
		CINNAMON_VERSION: string;
		npm_config__jsr_registry: string;
		MY_RUBY_HOME: string;
		ANDROID_SDK_HOME: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		RUBY_VERSION: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		rvm_version: string;
		rvm_user_install_flag: string;
		PNPM_HOME: string;
		GPG_AGENT_INFO: string;
		_: string;
		XAUTHORITY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XDG_GREETER_DATA_DIR: string;
		GJS_DEBUG_TOPICS: string;
		GDM_LANG: string;
		HOME: string;
		LANG: string;
		LC_PAPER: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		WEBKIT_DISABLE_DMABUF_RENDERER: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		JEKYLL_GITHUB_TOKEN: string;
		INIT_CWD: string;
		CHROME_DESKTOP: string;
		npm_lifecycle_script: string;
		GJS_DEBUG_OUTPUT: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		rvm_bin_path: string;
		GEM_PATH: string;
		GEM_HOME: string;
		LESSCLOSE: string;
		XDG_SESSION_CLASS: string;
		ANDROID_HOME: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		_CE_CONDA: string;
		LESSOPEN: string;
		LIBVIRT_DEFAULT_URI: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		NDK_HOME: string;
		VSCODE_GIT_IPC_HANDLE: string;
		ENVIRONMENT: string;
		CONDA_SHLVL: string;
		rvm_loaded_flag: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		CHROME_EXECUTABLE: string;
		LC_TELEPHONE: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		PAPERSIZE: string;
		npm_config_user_agent: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		CONDA_PYTHON_EXE: string;
		XDG_RUNTIME_DIR: string;
		npm_package_json: string;
		LC_TIME: string;
		BUN_INSTALL: string;
		ANALYZER_STATE_LOCATION_OVERRIDE: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		GTK3_MODULES: string;
		GCC_COLORS: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		npm_config_node_linker: string;
		PATH: string;
		npm_config_node_gyp: string;
		GDMSESSION: string;
		HISTFILESIZE: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_registry: string;
		IRBRC: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		rvm_path: string;
		LC_NUMERIC: string;
		GOPATH: string;
		TERM_PROGRAM: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
