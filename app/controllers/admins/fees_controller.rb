class Admins::FeesController < Admins::BaseController
  before_action :set_fee, only: [:show, :update, :destroy]

  def index
    fees = Fee.all
    render json: fees
  end

  def show
    render json: @fee
  end

  def create
    fee = Fee.create(fee_params)
    render_resource_or_errors(fee)
  end

  def update
    @fee.update(fee_params) ? render_updated(@fee) : render_unprocessable_entity('Not successfully updated')
  end

  def destroy
    @fee.destroy
    head :no_content
  end

  private

  def fee_params
    params.require(:fee).permit(:amount, :due_date, :payment_status)
  end

  def set_fee
    @fee = Fee.find(params[:id])
  end
end
