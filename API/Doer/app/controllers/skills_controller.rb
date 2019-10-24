class SkillsController < ApplicationController
    def index
        @skills = Skill.all
        
        render json: @skills
    end

    def create
        @skill = skill.new(skill_params)
 
        # byebug
        if @skill.save
            # byebug
            render json: @skill
        else
            render json: {error: 'Did not create new skill!'}
        end
    end

    def show
        @skill = Skill.find_by_id(params[:id])
        render json: @skill
    end

    private

    def skill_params
        params.require(:skill).permit(:name, :equipment)
    end
end
