# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_31_174240) do

  create_table "categories", force: :cascade do |t|
    t.string "category"
  end

  create_table "tools", force: :cascade do |t|
    t.string "name"
    t.integer "price", default: 0
    t.string "description"
    t.string "condition"
    t.string "img_url"
    t.integer "category_id"
    t.integer "likes", default: 0
  end

end
