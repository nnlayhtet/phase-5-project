class JoinedGroupsController < ApplicationController
    def index
        render json: JoinedGroup.all
    end
end
