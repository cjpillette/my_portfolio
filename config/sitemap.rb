require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'https://thawing-depths-33782.herokuapp.com/'
SitemapGenerator::Sitemap.create do
  add '/pages/more_about_me', changefreq: 'weekly'
  add '/pages/quarantine_project'
  add '/pages/cfa_scholarship_project'
  add '/pages/travel_project'
  add '/pages/chat_room_project'
  add '/pages/pure_ruby_project'
  add '/pages/ruby_cli_display'

end
SitemapGenerator::Sitemap.ping_search_engines # Not needed if you use the rake tasks
