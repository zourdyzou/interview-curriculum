import { DefinePlugin } from "webpack";

/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @example
 * const config = {
 *     isProd: true
 * }
 */
import { isDev, isDevServer, isProd } from "../utils/env";

const config = {
  IS_PROD: isProd,
  IS_DEV: isDev,
  IS_DEV_SERVER: isDevServer,
};

export const definePlugin = new DefinePlugin(config);
