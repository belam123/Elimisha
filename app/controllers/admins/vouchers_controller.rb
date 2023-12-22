class Admins::VouchersController < Admins::BaseController
  before_action :authenticate_admin, only: [:create, :update, :destroy]

  def index
    vouchers = Voucher.all
    render json: vouchers
  end

  def show
    voucher = Voucher.find(params[:id])
    render json: voucher
  end

  def create
    voucher = Voucher.create(voucher_params)
    render_resource_or_errors(voucher)
  end

  def update
    voucher = Voucher.find(params[:id])
    voucher.update(voucher_params) ? render_updated(voucher) : render_unprocessable_entity('Not successfully updated')
  end

  def destroy
    voucher = Voucher.find(params[:id])
    voucher.destroy
    head :no_content
  end

  private

  def voucher_params
    params.require(:voucher).permit(:voucher_amount, :expiry_date, :student_id)
  end
end
