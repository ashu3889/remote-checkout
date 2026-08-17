const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  entry: './index.js',
  mode: 'development',
  devServer: { 
    port: 3001, 
    headers: { "Access-Control-Allow-Origin": "*" },
    allowedHosts: 'all'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote_checkout',
      filename: 'remoteEntry.js',
      exposes: { 
        './CheckoutButton': './CheckoutComponent.js' 
      },
    }),
  ],
};
