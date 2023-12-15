require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  test 'should be valid' do
    student = Student.new(
      first_name: 'John',
      second_name: 'Doe',
      last_name: 'Smith',
      email: "valid_email@kibwareboys.ac.ke",
      password_digest: 'hashed_password'
    )
    assert student.valid?
  end

  test 'should require first name' do
    student = Student.new(second_name: 'Doe', last_name: 'Smith', email: 'john.doe@example.com', password_digest: 'hashed_password')
    assert_not student.valid?
  end

  test 'should require second name' do
    student = Student.new(first_name: 'John', last_name: 'Smith', email: 'john.doe@example.com', password_digest: 'hashed_password')
    assert_not student.valid?
  end

  test 'should require last name' do
    student = Student.new(first_name: 'John', second_name: 'Doe', email: 'john.doe@example.com', password_digest: 'hashed_password')
    assert_not student.valid?
  end

  test 'should require email' do
    student = Student.new(first_name: 'John', second_name: 'Doe', last_name: 'Smith', password_digest: 'hashed_password')
    assert_not student.valid?
  end

  test 'should require valid email format' do
    student = Student.new(
      first_name: 'John',
      second_name: 'Doe',
      last_name: 'Smith',
      email: 'invalid_email',
      password_digest: 'hashed_password'
    )
    assert_not student.valid?
  end

end
