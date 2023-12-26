require 'dotenv'
Dotenv.load('.env')

admin1_password = ENV['ADMIN1_PASSWORD'] || 'default_password'
admin2_password = ENV['ADMIN2_PASSWORD'] || 'default_password'

stud1_password = ENV['STUD1_PASSWORD'] || 'default_password'
stud2_password = ENV['STUD2_PASSWORD'] || 'default_password'
stud3_password = ENV['STUD3_PASSWORD'] || 'default_password'

hashed_password1 = BCrypt::Password.create(admin1_password)
hashed_password2 = BCrypt::Password.create(admin2_password)
hashed_password3 = BCrypt::Password.create(stud1_password)
hashed_password4 = BCrypt::Password.create(stud2_password)
hashed_password5 = BCrypt::Password.create(stud3_password)


puts 'seeding...'

#forms 
form1 = Form.create(year: "freshman")
form2 = Form.create(year: "sophomore")
form3 = Form.create(year: "junior")
form4 = Form.create(year: "senior")

#admins
admin1 = Admin.create(email: "belammuia0@gmail.com", password: hashed_password1)
admin2 = Admin.create(email: "clivemudigo@gmail.com", password: hashed_password2)
admin3 = Admin.create(email: "muia@gmail.com", password: '12345')

#students
student1 =  Student.create(first_name: "James", second_name: "Kamau", last_name: "Mashu", email: "kmashu@kibwareboys.ac.ke",password: hashed_password3,password_confirmation: hashed_password3, form_id: form1.id)
student2 =  Student.create(first_name: "Brian", second_name: "Muchiri", last_name: "Nderitu",email: "bmuchiri@kibwareboys.ac.ke", password: hashed_password4, password_confirmation: hashed_password4,form_id: form4.id)
student3 = Student.create(first_name: "Joshua", second_name: "Ochieng", last_name: "Aduor", email: "joduor@kibwareboys.ac.ke", password: hashed_password5, password_confirmation: hashed_password5, form_id: form2.id)

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
fee3 = Fee.create(amount: 0, due_date: 'NA', payment_status: 'Cleared', student_id: student2.id)



#subject

subject1 = Subject.create(name:'math', teacher_id: teacher1.id)
subject2 = Subject.create(name: 'eng', teacher_id: teacher2.id)
subject3 = Subject.create(name: 'sus',teacher_id: teacher3.id)
subject4 = Subject.create(name:'fil', teacher_id: teacher4.id)
subject5 = Subject.create(name: 'accounting',teacher_id: teacher5.id)
subject6 = Subject.create(name:'ist', teacher_id: teacher6.id)
subject7 = Subject.create(name:'music',teacher_id: teacher1.id)
subject8 = Subject.create(name:'french',teacher_id: teacher2.id)
subject9 = Subject.create(name:'arts', teacher_id: teacher3.id)
subject10 = Subject.create(name:'drama',teacher_id: teacher4.id)

#add more seeding


puts'done seeding'

