require 'dotenv'
Dotenv.load('.env')

admin1_password = ENV['ADMIN1_PASSWORD'] || 'default_password'
admin2_password = ENV['ADMIN2_PASSWORD'] || 'default_password'

stud1_password = ENV['STUD1_PASSWORD'] || 'default_password'


hashed_password1 = BCrypt::Password.create(admin1_password)
hashed_password2 = BCrypt::Password.create(admin2_password)
hashed_password3 = BCrypt::Password.create(stud1_password)



puts 'seeding...'

#forms 
form1 = Form.create(year: "freshman")
form2 = Form.create(year: "sophomore")
form3 = Form.create(year: "junior")
form4 = Form.create(year: "senior")

#admins
admin1 = Admin.create(email: "belammuia0@gmail.com", password: hashed_password1)
admin2 = Admin.create(email: "clivemudigo@gmail.com", password: hashed_password2)
admin3 = Admin.create!(email: 'muia@gmail.com', password: '12345').generate_access_token


student1 = Student.create(
    first_name: "Belam",
    second_name: "Muia",
    last_name: "Nzioka",
    email: "bmuia@careercampus.ac.ke",
    password: 'belam',
    password_confirmation: 'belam',
    form_id: form4.id
  )
  

  
#teachers
teacher1 = Teacher.create(first_name: "Paul", last_name: "Wainaina", email: "balozi@gmail.com",department: "Soc1al sciences and humanities")
teacher2 = Teacher.create(first_name: "John", last_name: "Koli", email: "kolingo@gmail.com",department: "Social sciences and humanities")
teacher3 = Teacher.create(first_name: "Brian", last_name: "Kaleli", email: "kaleli@gmail.com",department: "Maths and sciences")
teacher4 = Teacher.create(first_name: "Ben", last_name: "Wafula", email: "wafula@gmail.com",department: "Social sciences and humanities")
teacher5 = Teacher.create(first_name: "Jonah", last_name: "ruto", email: "jruto@gmail.com",department: "Languages")
teacher6 = Teacher.create(first_name: "Emilia", last_name: "Makena", email: "makena@gmail.com",department: "Maths and sciences")

#vouchers
voucher1 = Voucher.create(voucher_amount: 1050, expiry_date: "19-04-2023", student_id: student1.id)

#fees
fee1 =  Fee.create(amount: 1500, due_date: '04-04-2023', payment_status: "Not cleared", student_id: student1.id)



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
#marks 
mark1 = Mark.create(
    exam_score: 70,
    assignment_score: 65,
    quiz_score: 90,
    subject_id: subject1.id,
    student_id: student1.id
)
mark2 = Mark.create(exam_score: 80, assignment_score: 79, quiz_score: 45, subject_id: subject2.id, student_id: student1.id);
mark3 = Mark.create(exam_score: 40, assignment_score: 30, quiz_score: 75, subject_id: subject3.id, student_id: student1.id);
mark4 = Mark.create(exam_score: 90, assignment_score: 69, quiz_score: 55, subject_id: subject4.id, student_id: student1.id);
mark5 = Mark.create(exam_score: 61, assignment_score: 72, quiz_score: 45, subject_id: subject5.id, student_id: student1.id);
#add more seeding


puts'done seeding'

