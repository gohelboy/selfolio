import { NextResponse } from "next/server";


export const successResponse = (message) => {
    return NextResponse.json({ message, status: true }, { status: 200 });
}
export const successResponseWithData = (data, message) => {
    return NextResponse.json({ data, message, status: true }, { status: 200 });
}
export const failedResponse = (message) => {
    return NextResponse.json({ message, status: false }, { status: 400 });
}
export const InternalServerError = (error) => {
    return NextResponse.json({ error: error?.message, status: false }, { status: 500 });
}