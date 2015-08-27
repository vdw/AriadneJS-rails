$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "ariadne_js_rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "ariadne_js_rails"
  s.version     = AriadneJsRails::VERSION
  s.authors     = ["Dimitris Krestos"]
  s.email       = ["dkrestos@generation-y.gr"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of AriadneJsRails."
  s.description = "TODO: Description of AriadneJsRails."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.3"

  s.add_development_dependency "sqlite3"
end
