require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # CORS configuration
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'  # You can restrict this to specific origins in production
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          credentials: false  # Set to true if you need to send cookies/credentials
      end
    end

    # API only configuration
    config.api_only = true
  end
end
