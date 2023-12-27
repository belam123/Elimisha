class Admins::NotificationsController < Admins::BaseController
    before_action :set_notification, only: [:show,:update,:destroy]

    def index
        notifications = Notification.all
        render json: notifications
    end

    def show
        render json: @notification
    end

    def create
        notification = Notification.create(notification_params)
        render_resource_or_errors(notification)
    end

    def update
        @notification.update(notification_params) ? render_updated(@notification) : render_unprocessable_entity('update was unsuccessful')
    end

    def destroy
        @notification.destroy
        head :no_content
    end

    private

    def notification_params
        params.require(:notification).permit(:message,:student_id)
    end

    def set_notification
        @notification = Notification.find(params[:id])
    end
end
