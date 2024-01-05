require 'dotenv'
Dotenv.load('.env')

admin1_password = ENV['ADMIN1_PASSWORD'] || 'default_password'
admin2_password = ENV['ADMIN2_PASSWORD'] || 'default_password'
stud1_password = ENV['STUD1_PASSWORD'] || 'default_password'

hashed_password1 = BCrypt::Password.create(admin1_password)
hashed_password2 = BCrypt::Password.create(admin2_password)
hashed_password3 = BCrypt::Password.create(stud1_password)

puts 'seeding...'

# Generate forms
form_names = ["freshman", "sophomore", "junior", "senior"]
forms = form_names.map { |name| Form.create(year: name) }


admin1 = Admin.create(email: "belammuia0@gmail.com", password: hashed_password1)
admin2 = Admin.create(email: "clivemudigo@gmail.com", password: hashed_password2)
admin3 = Admin.create!(email: 'muia@gmail.com', password: '12345').generate_access_token


students = []
70.times do
  student = Student.create(
    first_name: Faker::Name.first_name,
    second_name: Faker::Name.middle_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.unique.email(domain: 'careercampus.ac.ke'),
    password: Faker::Internet.password(min_length: 8),
    form: forms.sample
  )

  students << student

 
  Voucher.create(voucher_amount: Faker::Number.between(from: 1000, to: 2000),
                 expiry_date: Faker::Date.forward(days: 30),
                 student: student)

  Fee.create(amount: Faker::Number.between(from: 1000, to: 2000),
             due_date: Faker::Date.forward(days: 30),
             payment_status: ["Not cleared", "Cleared"].sample,
             student: student)
end

teachers = []
20.times do
  teacher = Teacher.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.unique.email(domain: 'careercampus.ac.ke'),
    department: Faker::Job.field
  )
  teachers << teacher
end


subjects = []
10.times do
  subject = Subject.create(
    name: Faker::Educator.subject,
    teacher: teachers.sample
  )
  subjects << subject
end


students.each do |student|
  subjects.each do |subject|
    Mark.create(
      exam_score: Faker::Number.between(from: 40, to: 100),
      assignment_score: Faker::Number.between(from: 0, to: 100),
      quiz_score: Faker::Number.between(from: 0, to: 100),
      subject: subject,
      student: student
    )
  end
end

puts 'done seeding'
