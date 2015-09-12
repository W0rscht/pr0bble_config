require 'test_helper'

class Pr0bbleControllerTest < ActionController::TestCase
  test "should get config" do
    get :config
    assert_response :success
  end

end
