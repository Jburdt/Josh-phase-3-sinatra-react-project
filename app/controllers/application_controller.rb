class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  post "/tools" do
    tools = Tool.create(name: params[:item], price: params[:price], description: params[:description], condition: params[:condition])
    tools.to_json( include: { tool: {only: [:tool]} })
  end

  get "/tools" do 
    tools = Tool.all.order(:name)
    tools.to_json( include: { tool: {only: [:tool]} })
  end

  patch "/tools/:id" do 
    tools = Tools.find(params[:id])
    tools.update(name: params[:name])
    tools.to_json( include: { tool: {only: [:tool]} })
  end

  
    

end
