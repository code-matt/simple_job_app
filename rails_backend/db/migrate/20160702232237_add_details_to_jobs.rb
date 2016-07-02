class AddDetailsToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :description, :string
    add_column :jobs, :wage, :decimal
  end
end
