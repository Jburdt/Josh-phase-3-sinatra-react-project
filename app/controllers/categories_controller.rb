class CategoriesController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/categories" do 
    categories = category.all
    categories.to_json
  end
end