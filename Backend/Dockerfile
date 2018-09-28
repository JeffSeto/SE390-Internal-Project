FROM python:3.6-alpine
COPY requirements.txt /
RUN pip3 install -r /requirements.txt
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip3 install psycopg2
COPY src/ /app
WORKDIR /app