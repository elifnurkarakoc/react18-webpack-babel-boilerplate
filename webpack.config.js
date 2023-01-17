const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** Temel olarak webpack'e index.js'yi başlangıç olarak almasını söylüyoruz. Ardından, tüm dosya uzantılarını kontrol et ve
 *  module.rules içindeki tüm kuralları uygula ve çıktıyı üretip ortak klasördeki main.js'ye yerleştir diyoruz. */

module.exports = {
  /** "mode"
   * ortam - development, production, none.
   *  default: production
   */
  mode: "development",
  entry: "./src/index.js",
  output: {
    /** "path"
     * çıktının oluşturulcağı path
     */
    path: path.resolve(__dirname, "build"),
    /** "filename"
     * çıktı dosya adı
     */
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  target: "web",
  devServer: {
    /** "port"
     * dev server port numarası
     */
    port: "8000",
    /** "static"
     * Webpack'e hangi statik dosyayı sunması gerektiğini söyler.
     */
    static: ["./public"],
    /** "open"
     * server başarılı bir şekilde çalışmaya başladığında browserda sayfanın açılmasını sağlar.
     */
    open: true,
    /** "hot"
     * sayfaya yapılan değişikliğin yansımasını sağlar.
     */
    hot: true,
    /** "liveReload"
     * Bunun çalışması için "hot" false olarak ayarlanmalıdır.
     */
    liveReload: false,
  },
  resolve: {
    /** "extensions"
     * Birden fazla dosya aynı adı sahipse ve farklı uzantılara varsa,
     * webpack dizide ilk listelenen uzantıya sahip olanı çözer ve gerisini atlar.
     */
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    /** "rules"
     * bir require()/import deyiminin içinde '.js veya .jsx' dosyasına çözümlenen bir yolla karşılaşıldığında,
     * onu eklemeden önce dönüştürmek için babel-loader'ı kullan.
     * node_modules klasörünü arama dışında bırak.
     */
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
