class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  post "/tools" do
    tool = Tool.create(name: params[:item], price: params[:price], description: params[:description], condition: params[:condition])
    tool.to_json( include: { tool: {only: [:tool]} })
  end

  get "/tools" do 
    tools = Tool.all.order(:name)
    tools.to_json
  end

  patch "/tools/:id" do 
    tool = Tools.find(params[:id])
    tool.update(name: params[:name])
    tool.to_json( include: { tool: {only: [:tool]} })
  end

  delete "/tools/:id" do
    tool = Tool.find(params[:id])
    tool.destroy
    tool.to_json
  end
    
end
