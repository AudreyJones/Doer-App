# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



skill1 = Skill.create!(name: 'General Labor',  equipment: 'Hammer')
skill2 = Skill.create!(name: 'Office',  equipment: 'Pens')
skill3 = Skill.create!(name: 'iRelaunch',  equipment: 'Paper')
skill4 = Skill.create!(name: 'Warehouse',  equipment: 'Forklift')
skill5 = Skill.create!(name: 'Hospitality',  equipment: 'Blanket')


# Making our categories
category1 = Category.create(name: 'Contruction', have: true, experience: 5)
category2 = Category.create(name: 'Restoration', have: false, experience: 10)
category3 = Category.create(name: 'Painting', have: false, experience: 2)

skill1.categories << [category1, category2, category3]
skill1.save