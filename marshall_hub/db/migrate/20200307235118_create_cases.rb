class CreateCases < ActiveRecord::Migration[6.0]
  def change
    create_table :cases do |t|
      t.string :victim_name
      t.integer :victim_age
      t.string :victim_ethnic
      t.string :incident_location
      t.string :charges
      t.text :description
      t.boolean :detained
      t.integer :cops_present
      t.string :photo_url
      t.string :officer_name
      t.integer :office_age
      t.string :officer_ethnic
      t.string :officer_nature
      t.boolean :miranda_rights
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
