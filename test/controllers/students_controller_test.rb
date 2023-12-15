require "test_helper"

class StudentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student_params = {
      student: {
        first_name: 'John',
        second_name: 'Doe',
        last_name: 'Smith',
        email: 'johndoe@kibwareboys.ac.ke',
        password: 'password',
        password_confirmation: 'password'
      }
    }
  end
 
  test 'should create student' do
    assert_difference('Student.count') do
      post students_url, params: @student_params, as: :json
    end
    assert_response :created
    assert_not_nil session['student_id']  
  end
end
