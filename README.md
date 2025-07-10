# portalHospitalT

docker build -t hospital_portal_web .

docker run -d -p 8081:80 --name hospital_portal_web_container hospital_portal_web
