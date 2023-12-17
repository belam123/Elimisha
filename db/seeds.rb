# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding...'

#forms 
form1 = Form.create(class_number: 1, stream: "Blue")
form2 = Form.create(class_number:2, stream: "Purple")
form4 = Form.create(class_number: 4, stream: "Green")

#admins
admin1 = Admin.create(email: "belammuia0@gmail.com", password: "belam")
admin2 = Admin.create(email: "clivemudigo@gmail.com", password: "nyalingu")

#students
student1 =  Student.create(first_name: "James", second_name: "Kamau", last_name: "Mashu", email: "kmashu@kibwareboys.ac.ke",password: "12345",password_confirmation: "12345", form_id: form1.id)
student2 =  Student.create(first_name: "Brian", second_name: "Muchiri", last_name: "Nderitu",email: "bmuchiri@kibwareboys.ac.ke", password: "12345", password_confirmation: "12345",form_id: form4.id)
student3 = Student.create(first_name: "Joshua", second_name: "Ochieng", last_name: "Aduor", email: "joduor@kibwareboys.ac.ke", password: "12345", password_confirmation: "12345", form_id: form2.id)

#teachers
teacher1 = Teacher.create(first_name: "Paul", last_name: "Wainaina", email: "balozi@gmail.com",department: "Soc1al sciences and humanities")
teacher2 = Teacher.create(first_name: "John", last_name: "Koli", email: "kolingo@gmail.com",department: "Social sciences and humanities")
teacher3 = Teacher.create(first_name: "Brian", last_name: "Kaleli", email: "kaleli@gmail.com",department: "Maths and sciences")
teacher4 = Teacher.create(first_name: "Ben", last_name: "Wafula", email: "wafula@gmail.com",department: "Social sciences and humanities")
teacher5 = Teacher.create(first_name: "Jonah", last_name: "ruto", email: "jruto@gmail.com",department: "Languages")
teacher6 = Teacher.create(first_name: "Emilia", last_name: "Makena", email: "makena@gmail.com",department: "Maths and sciences")

#vouchers
voucher1 = Voucher.create(voucher_amount: 1050, expiry_date: "19-04-2023", student_id: student1.id)
voucher2 = Voucher.create(voucher_amount: 2250, expiry_date: "27-05-2023", student_id: student3.id)
voucher3 = Voucher.create(voucher_amount: 10500, expiry_date: '20-11-2024', student_id: student2.id) 

#fees
fee1 =  Fee.create(amount: 1500, due_date: '04-04-2023', payment_status: "Not cleared", student_id: student1.id)
fee2 =  Fee.create(amount: 0, due_date: 'NA', payment_status: "Cleared", student_id: student3.id)
fee3 = Fee.create(amount: 0, due_date: 'NA', payment_status: 'cleared', student_id: student2.id)

#courses
course1 = Course.create(course_name: "Math",course_des: "121", teacher_id: teacher3.id)
course2 = Course.create(course_name: "Geo",course_des: "212", teacher_id: teacher2.id)
course3 = Course.create(course_name: "Hist",course_des: "211", teacher_id: teacher4.id)
course4 = Course.create(course_name: "Kisw",course_des: "200", teacher_id: teacher5.id)
course5 = Course.create(course_name: "Math",course_des: "121", teacher_id: teacher6.id)
course6 = Course.create(course_name: "CRE",course_des: "210", teacher_id: teacher1.id)

#grades
grade1 = Grade.create(score: 90, comments: "Excellent", student_id: student1.id, course_id: course6.id)
grade2 = Grade.create(score: 80, comments:"Good" , student_id: student1.id, course_id: course5.id)
grade3 = Grade.create(score: 50, comments: "Average", student_id: student2.id, course_id: course4.id)
grade4 = Grade.create(score: 88, comments: "Excellent", student_id: student2.id, course_id: course3.id)
grade5 = Grade.create(score: 40, comments: "Below average", student_id: student3.id, course_id: course2.id)
grade6 = Grade.create(score: 70, comments: "Above average", student_id: student3.id, course_id: course1.id)

#add more seeding


puts'done seeding'