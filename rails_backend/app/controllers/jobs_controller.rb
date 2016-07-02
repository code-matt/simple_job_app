class JobsController < ApplicationController
  before_action :set_job, only: [:show, :update, :destroy]

  def index
    @jobs = Job.all

    results = { jobs: @jobs}
    render json: results
  end

  def show
    render json: @job
  end

  def create
    @job = Job.new(job_params)

    if @job.save
      render json: @job, status: :created, location: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @job.destroy
  end

  private
    def set_job
      @job = Job.find(params[:id])
    end

    def job_params
      params.require(:job).permit(:name)
    end
end
