# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding...'
student = Student.create(first_name: 'Belam', second_name: 'Muia', last_name: 'Nzioka', email: 'belam@kibwareboys.ac.ke',password:'1234',password_confirmation: '1234')
puts'done seeding'