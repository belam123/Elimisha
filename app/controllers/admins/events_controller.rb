class Admins::EventsController < Admins::BaseController
    before_action :set_event, only: [:show,:update,:destroy]

    def index
        events = Event.all
        render json: courses
    end

    def show
        render json: @event
    end

    def create
        event = Event.create(event_params)
        render_resource_or_errors(event)
    end

    def update
        @event.update(event_params) ? render_updated(@event) : render_unprocessable_entity('update was unsuccessful')
    end

    def destroy
        @event.destroy
        head :no_content
    end

    private

    def event_params
        params.require(:event).permit(:due_date, :message,:student_id)
    end

    def set_event
        @event = Event.find(params[:id])
    end
end
