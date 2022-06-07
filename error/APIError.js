const TYPE_PLACEHOLDER = 'No type given'

class APIError {
    constructor(type, title, status, detail, instance) {
        this.type = type;
        this.title = title;
        this.status = status;
        this.detail = detail;
        this.instance = instance;
    }

    static internal() {
        return new APIError(
            TYPE_PLACEHOLDER,
            "Internal Error",
            500, 
            "We're so sorry! We're looking into this.",
        );
    }

    static invalidId(detail) {
        return new APIError(
            TYPE_PLACEHOLDER,
            "Invalid ID",
            400,
            detail,
        )
    }

    static notFound(detail) {
        return new APIError(
            TYPE_PLACEHOLDER,
            "Resource Not Found",
            404,
            detail,
        )
    }

    static invalidRequestBody(detail) {
        return new APIError(
            TYPE_PLACEHOLDER,
            "Invalid Request Body",
            400,
            detail,
        )
    }

    static notAuthorized() {
        return new APIError(
            TYPE_PLACEHOLDER,
            "Unauthorized",
            401,
            "You are not authorized to access this resource.",
        )
    }

}

module.exports = APIError;