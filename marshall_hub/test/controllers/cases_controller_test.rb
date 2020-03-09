require 'test_helper'

class CasesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @case = cases(:one)
  end

  test "should get index" do
    get cases_url, as: :json
    assert_response :success
  end

  test "should create case" do
    assert_difference('Case.count') do
      post cases_url, params: { case: { charges: @case.charges, cops_present: @case.cops_present, description: @case.description, detained: @case.detained, incident_location: @case.incident_location, miranda_rights: @case.miranda_rights, office_age: @case.office_age, officer_ethnic: @case.officer_ethnic, officer_name: @case.officer_name, officer_nature: @case.officer_nature, photo_url: @case.photo_url, user_id: @case.user_id, victim_age: @case.victim_age, victim_ethnic: @case.victim_ethnic, victim_name: @case.victim_name } }, as: :json
    end

    assert_response 201
  end

  test "should show case" do
    get case_url(@case), as: :json
    assert_response :success
  end

  test "should update case" do
    patch case_url(@case), params: { case: { charges: @case.charges, cops_present: @case.cops_present, description: @case.description, detained: @case.detained, incident_location: @case.incident_location, miranda_rights: @case.miranda_rights, office_age: @case.office_age, officer_ethnic: @case.officer_ethnic, officer_name: @case.officer_name, officer_nature: @case.officer_nature, photo_url: @case.photo_url, user_id: @case.user_id, victim_age: @case.victim_age, victim_ethnic: @case.victim_ethnic, victim_name: @case.victim_name } }, as: :json
    assert_response 200
  end

  test "should destroy case" do
    assert_difference('Case.count', -1) do
      delete case_url(@case), as: :json
    end

    assert_response 204
  end
end
