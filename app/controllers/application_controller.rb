class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  post "/tools" do
    tool = Tool.create(name: params[:name], price: params[:price], description: params[:description], condition: params[:condition])
    tool.to_json( include: :categories)
  end

  get "/tools" do 
    tools = Tool.all
    tools.to_json
  end

  patch "/tools/:id" do 
    tool = Tools.find(params[:id])
    tool.update(name: params[:name], price: params[:price], description: params[:description], condition: params[:condition])
    tool.to_json
  end

  delete "/tools/:id" do
    tool = Tool.find(params[:id])
    tool.destroy
    tool.to_json
  end
    
end
