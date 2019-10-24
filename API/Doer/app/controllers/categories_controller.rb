class CategoriesController < ApplicationController
     # Take in new categories data from front-end!
     def index
        @categories = Category.all
        # @users = User.all
        render json: @categories
    end

    def create
        # byebug
        @category = Category.new(categories_params)
        
        if @category.save
            render json: @category, serializer: NewCategorySerializer
        else
            render json: {error: 'Did not create new category!'}
        end
    #     # Creating a new material with data pulled from front-end's MaterialForm
    #     # Requires an action with a fetch request Post method - actions/materials
    #     @project = Project.find_by_id(params[:project_id])
    #     # @last_material = @project.materials.last
    #     Material.create(project_id: @project.id)
        # render json: @material
    end

    def show
        @category = Category.find_by_id(params[:id])
        render json: @category
    end

    def update

    end

    def delete

    end

    private

    def categories_params
        params.require(:category).permit(:name, :have, :experience)
    end
end
