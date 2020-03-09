class AddCasesToComments < ActiveRecord::Migration[6.0]
  def change
    add_reference :comments, :case, null: false, foreign_key: true
  end
end
