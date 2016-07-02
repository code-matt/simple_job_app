# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Job.create(
  name: 'job title 1',
  description: 'painting a fence',
  wage: 15.25)
Job.create(
  name: 'job title 2',
  description: 'moving some furniture',
  wage: 13.25)
Job.create(
  name: 'job title 3',
  description: 'shoveling some snow',
  wage: 11.25)
