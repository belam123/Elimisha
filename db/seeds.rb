# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding...'
# db/seeds.rb

# Seed data for courses
Course.create(course_name: 'Math', course_des: 'Mathematics course description')
Course.create(course_name: 'Science', course_des: 'Science course description')
# Add more courses as needed

# Seed data for forms
Form.create(class_number: 10, stream: 'A')
Form.create(class_number: 11, stream: 'B')
# Add more forms as needed

# Seed data for students
Student.create(
  first_name: 'John',
  second_name: 'Doe',
  last_name: 'Smith',
  email: 'johndoe@kibwareboys.ac.ke',
  password: 'password',
  password_confirmation: 'password',
  form: Form.first
)
Student.create(
  first_name: 'Jane',
  second_name: 'Doe',
  last_name: 'Johnson',
  email: 'jamhydeoe@kibwareboys.ac.ke',
  password: 'password',
  password_confirmation: 'password',
  form: Form.last
)
# Add more students as needed

# Seed data for teachers
Teacher.create(
  first_name: 'Alice',
  last_name: 'Johnson',
  email: 'alice.johnson@example.com',
  department: 'Math'
)
Teacher.create(
  first_name: 'Bob',
  last_name: 'Smith',
  email: 'bob.smith@example.com',
  department: 'Science'
)
# Add more teachers as needed

# Seed data for fees
Fee.create(amount: 1000, due_date: '2023-12-31', payment_status: 'Paid', student: Student.first)
Fee.create(amount: 1200, due_date: '2023-12-31', payment_status: 'Pending', student: Student.last)
# Add more fees as needed

# Seed data for vouchers
Voucher.create(voucher_amount: 500, expiry_date: '2023-12-31', student: Student.first)
Voucher.create(voucher_amount: 700, expiry_date: '2023-12-31', student: Student.last)
# Add more vouchers as needed

# Seed data for grades
Grade.create(score: 90, comments: 'Excellent', student: Student.first, course: Course.first)
Grade.create(score: 85, comments: 'Very Good', student: Student.last, course: Course.last)
# Add more grades as needed

puts'done seeding'