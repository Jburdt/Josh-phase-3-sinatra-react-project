puts "🌱 Seeding spices..."

puts "Destroying all Tool/Contractor data! 💀"
Tool.destroy_all
Contractor.destroy_all

puts "Creating Tool data... 🛠️ "
tool_1 = Tool.create(name: "Reciprocating Saw", price: :35, description: "Just a saw", condition: "Used")
tool_2 = Tool.create(name: "Oscillating Multi-Tool", price:50, description: "Changing head tool", condition: "Used")
tool_3 = Tool.create(name: "Angle Grinder", price: :80, description: "Just a grinder", condition: "Used")
tool_4 = Tool.create(name: "Impact Driver", price: :95, description: "Stronger drill", condition: "Used")
tool_5 = Tool.create(name: "Nailer", price: :70, description: "Air compressed nailer", condition: "Used")
tool_6 = Tool.create(name: "Air Compressor", price: :40, description: "Just a normal air compressor", condition: "Used")
tool_7 = Tool.create(name: "Battery Chargers", price: :35, description: "chargers", condition: "Used")
tool_8 = Tool.create(name: "Extension Cords", price: :35, description: "cords", condition: "Used")
tool_9 = Tool.create(name: "CUT-OUT SAW", price: :88, description: "Big saw", condition: "Used")
tool_10 =  Tool.create(name: "CONCRETE VIBRATOR", price: :100, description: "Smasher", condition: "Used")

puts "✅ Done seeding!"


#figuring out what kind of seed data I want to use.