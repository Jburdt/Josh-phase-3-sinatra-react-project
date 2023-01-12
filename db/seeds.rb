puts "🌱 Seeding spices..."

puts "Destroying all Tool/Contractor data! 💀"
Tool.destroy_all
Contractor.destroy_all

puts "Creating Tool data... 🛠️"
tool_1 = Tool.create(name: "Reciprocating Saw", price: 35, description: "Just a saw", condition: "Used")
tool_2 = Tool.create(name: "Oscillating Multi-Tool", price: 50, description: "Changing head tool", condition: "Used")
tool_3 = Tool.create(name: "Angle Grinder", price: 80, description: "Just a grinder", condition: "Used")
tool_4 = Tool.create(name: "Impact Driver", price: 95, description: "Stronger drill", condition: "Used")
tool_5 = Tool.create(name: "Nailer", price: 70, description: "Air compressed nailer", condition: "Used")
tool_6 = Tool.create(name: "Air Compressor", price: 40, description: "Just a normal air compressor", condition: "Used")
tool_7 = Tool.create(name: "Battery Chargers", price: 35, description: "chargers", condition: "Used")
tool_8 = Tool.create(name: "Extension Cords", price: 35, description: "cords", condition: "Used")
tool_9 = Tool.create(name: "CUT-OUT SAW", price: 88, description: "Big saw", condition: "Used")
tool_10 = Tool.create(name: "CONCRETE VIBRATOR", price: 100, description: "Smasher", condition: "Used")

puts "Creating Contractor data... 👷‍♂️"
contractor1 = Contractor.create(name: "Josh Smith", phone_number: "(555) 777-9874", company: "Josh Build", tool_id: tool_1.id)
contractor2 = Contractor.create(name: "Blake Smith", phone_number: "(555) 234-2046", company: "Blake Builds", tool_id: tool_2.id)
contractor3 = Contractor.create(name: "John Smith", phone_number: "(555) 783-1523", company: "John Builds", tool_id: tool_3.id)
contractor4 = Contractor.create(name: "Ross Smith", phone_number: "(555) 456-0199", company: "Ross Builds", tool_id: tool_4.id)
contractor5 = Contractor.create(name: "Ethan Smith", phone_number: "(555) 193-2514", company: "Ethan Builds", tool_id: tool_5.id)
contractor6 = Contractor.create(name: "Kyle Smith", phone_number: "(555) 823-1294", company: "Kyle Builds", tool_id: tool_6.id)
contractor7 = Contractor.create(name: "Cody Smith", phone_number: "(555) 476-0398", company: "Cody Builds", tool_id: tool_7.id)

puts "✅ Done seeding!"

