import requests

BASE_URL = "http://localhost:5000"


def test_get_room_id():
    response = requests.get(f"{BASE_URL}/get_room_id")
    data = response.json()

    assert response.status_code == 200
    assert data["status"] == "Y"
    assert "room_id" in data

    return data["room_id"]


def test_store_room_information(room_id):
    room_information = {
        "room_id": room_id,
        "room_name": "Test Room",
        "participants": ["Alice", "Bob"]
    }

    response = requests.post(
        f"{BASE_URL}/room_information",
        json=room_information
    )

    assert response.status_code == 200


if __name__ == "__main__":
    room_id = test_get_room_id()
    test_store_room_information(room_id)

    print("All tests passed.")