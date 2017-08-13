import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const dictionary = {
            "peerAnsw": "peers already answered",
            "newAnswBtn": "GIVE new answer",
            "comBtn": "COMMENT",
            "contDisBtn": "CONTINUE discussion",
            "upVote": "upvotes",
            "downVote": "downvotes",
            "comDesc": "COMMENTED IT",
            "unfollowBtn": "unfollow",
            "lastDisTime": "Last time discussed",
            "lastDisTimeStatic": "1 day ago", // To do...
            "questionTitle": "QUESTION",
            "questionsTitle": "QUESTIONS",
            "countComDesc": "more activities",
            "sortByRecent": "recent",
            "sortByHot": "hot",
            "sortByDesc": ["Sort by:", "or"],
            "searchBtn": "SEARCH",
            "radioMyself": "My shelf",
            "radioAll": "All questions",
            "relDis": "related discusion",
            "peerInv": "peers involved",
            "conv": "conversations",
            "loadMoreBtn": "load more questions",
            "memberTime": "MEMBER FOR",
            "lastLogTime": "LAST SEEN",
            "activityLvl": "ACTIVITY LEVEL",
            "modalTitles": [
                "How it all started",
                "THAT'S WHERE WE HAVE BEEN",
                "THESE 5 MONTHS AGO",
                "WHO JOINED THE PLATFORM",
                "THAT SAME PERIOD",
                "THE HOTTEST DISCUSSION THESE DAYS",
            ],
            "peers": "peers",
            "discussions": "discussions",
            "findings": "findings",
            "questions": "questions",
        };

        let authors = [
            {
                "id": 0,
                "name": "Dr. Halima",
                "memberTime": "5 months",
                "lastLogTime": "Saturday afternoon",
                "peers": 46,
                "discussions": 29,
                "findings": 19,
                "questions": 10,
                "otherAutorsStatic": ["S.E.N Waveru", "Patricia", "Joseph Aluoch"],
                "votedComs": [],
                "votedQ": [],

            },
            {
                "id": 1,
                "name": "Eva",
                "memberTime": "5 months",
                "lastLogTime": "Saturday afternoon",
                "peers": 46,
                "discussions": 29,
                "findings": 19,
                "questions": 10,
                "otherAutorsStatic": ["S.E.N Waveru", "Patricia", "Joseph Aluoch"],
                "votedComs": [],
                "votedQ": [0,3], // The user is the author of the questions id: 0 and 3

            }
        ];

        let questions = [
            {
                "id": 0,
                "author": "Eva",
                "desc": ["ASKED", "IS ASKING:"],
                "title": "Will insulin make my patient gain weight?",
                "relDis": 2,
                "peerInv": 7,
                "conv": 3,
                "comments": [0, 1, 2, 3, 4, 5, 6],
                "content": "Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris.",
                "downvotes": 0, "upvotes": 19,
                "peerAnsw": 3,
                "lastTimeDiscusedDays": 1,
            },
            {
                "id": 1,
                "author": "Andrew",
                "desc": ["ASKED", "IS ASKING:"],
                "title": "Vegan diet in diabetes treatment?",
                "relDis": 2,
                "peerInv": 9,
                "conv": 5,
                "comments": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                "content": "Suspendisse tincidunt suscipit felis ut egestas. Quisque luctus, justo nec tristique condimentum, felis enim tempor ipsum, vel molestie erat justo sed enim. Duis sit amet ipsum justo. Vestibulum tempus nisi velit, in rutrum lorem sollicitudin id. Curabitur a congue tortor. ",
                "downvotes": 10, "upvotes": 21,
                "peerAnsw": 4,
                "lastTimeDiscusedDays": 1,
            },
            {
                "id": 2,
                "author": "Joseph",
                "desc": ["ASKED", "IS ASKING:"],
                "title": "Vegan diet to stop diabetes progress",
                "relDis": 5,
                "peerInv": 4,
                "conv": 0,
                "comments": [17, 18, 19],
                "content": "Pellentesque id interdum turpis. Maecenas vestibulum augue sapien, et auctor nibh tincidunt sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                "downvotes": 5, "upvotes": 12,
                "peerAnsw": 2,
                "lastTimeDiscusedDays": 1,
            }, // questions below are totaly random and untested
            {
                "id": 3,
                "author": "Eva",
                "desc": ["ASKED", "IS ASKING:"],
                "title": "How do you do?",
                "relDis": 5,
                "peerInv": 11,
                "conv": 2,
                "comments": [20, 21, 22, 23, 24, 25, 26],
                "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur auctor tristique tellus non vulputate.",
                "downvotes": 10, "upvotes": 19,
                "peerAnsw": 3,
                "lastTimeDiscusedDays": 2,
            },
            {
                "id": 4,
                "author": "Tom",
                "desc": ["ASKED", "IS ASKING:"],
                "title": "Do you like eat pizza?",
                "relDis": 6,
                "peerInv": 1,
                "conv": 8,
                "comments": [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                "content": "Cras malesuada sollicitudin risus. Nullam aliquam, lectus sit amet tincidunt pharetra, libero urna rhoncus nisl, non rutrum metus magna a ante. Ut malesuada metus et lacinia aliquet.",
                "downvotes": 10, "upvotes": 31,
                "peerAnsw": 4,
                "lastTimeDiscusedDays": 3,
            },
            {
                "id": 5,
                "author": "Anna",
                "desc": ["ASKED", "IS ASKING:"],
                "title": "What’s the funniest joke you know?",
                "relDis": 12,
                "peerInv": 11,
                "conv": 13,
                "comments": [37, 38, 39],
                "content": "Vivamus feugiat porttitor tellus ut dictum. Aenean pulvinar mauris ut eros commodo, sit amet bibendum lectus fringilla. Nullam arcu est, maximus a ipsum nec, molestie pellentesque velit.",
                "downvotes": 2, "upvotes": 12,
                "peerAnsw": 2,
                "lastTimeDiscusedDays": 4,
            },
        ];

        let comments = [
            {
                "id": 0, "qId": 0, "author": "Tom Hanks", "time": "yesterday", "downvotes": 0, "upvotes": 19, "type": "ANSWERED", "relDis": true,
                "content": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
            },
            {
                "id": 1, "qId": 0, "author": "Bill Gates", "time": "yesterday", "downvotes": 2, "upvotes": 5, "type": "COMMENTED", "answerId": 0,
                "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
                "id": 2, "qId": 0, "author": "Frank", "time": "yesterday", "downvotes": 1, "upvotes": 3, "type": "COMMENTED", "answerId": 0,
                "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                "id": 3, "qId": 0, "author": "Paulina", "time": "two days", "downvotes": 0, "upvotes": 6, "type": "ANSWERED", "relDis": false,
                "content": "Quisque tincidunt purus ipsum, at elementum arcu consectetur vitae. Fusce nec arcu arcu.",
            },
            {
                "id": 4, "qId": 0, "author": "Tom Cruise", "time": "three days", "downvotes": 9, "upvotes": 7, "type": "ANSWERED", "relDis": true,
                "content": "Quisque dapibus convallis metus. Praesent at dui ac tellus facilisis pulvinar vitae non ex. Vestibulum facilisis, massa vel aliquet ultrices, erat tellus pellentesque sapien, a consequat erat sem sit amet lacus.",
            },
            {
                "id": 5, "qId": 0, "author": "Brad Pitt", "time": "two days", "downvotes": 1, "upvotes": 8, "type": "COMMENTED", "answerId": 4,
                "content": "Nam non erat sed purus ultrices rutrum quis ut arcu. Nulla facilisi. Duis nunc tellus, pulvinar ornare est ut, euismod sollicitudin lectus. Nunc eget elit sit amet nulla dignissim volutpat non sed libero.",
            },
            {
                "id": 6, "qId": 0, "author": "John Depp", "time": "yesterday", "downvotes": 0, "upvotes": 12, "type": "COMMENTED", "answerId": 4,
                "content": "Praesent eget commodo nibh, vitae vehicula mauris. Morbi id arcu lacinia, congue est nec, posuere orci.",
            },
            {
                "id": 7, "qId": 1, "author": "Ed", "time": "yesterday", "downvotes": 0, "upvotes": 2, "type": "ANSWERED", "relDis": true,
                "content": "Donec elementum, justo at sagittis dignissim, est metus blandit neque, et maximus tortor diam sit amet massa.",
            },
            {
                "id": 8, "qId": 1, "author": "Bruce Willis", "time": "yesterday", "downvotes": 0, "upvotes": 3, "type": "COMMENTED", "answerId": 7,
                "content": "In ullamcorper venenatis dolor, in malesuada augue. Curabitur convallis dui elit, ut egestas erat consequat non. Praesent non dolor nec augue dapibus mollis.",
            },
            {
                "id": 9, "qId": 1, "author": "Arnold Schwarzenegger", "time": "yesterday", "downvotes": 6, "upvotes": 12, "type": "COMMENTED", "answerId": 7,
                "content": "Sed euismod lorem dolor, sed ornare sapien consectetur ut. Proin dui dui, lobortis sed felis id, condimentum ultricies velit.",
            },
            {
                "id": 10, "qId": 1, "author": "Sylvia", "time": "three days", "downvotes": 1, "upvotes": 8, "type": "ANSWERED", "relDis": true,
                "content": "Maecenas quis mauris vel nisi faucibus eleifend sit amet nec orci. Donec vulputate, sapien ac ornare efficitur, dui lectus molestie odio, nec gravida mauris eros in purus.",
            },
            {
                "id": 11, "qId": 1, "author": "Patricia", "time": "two days", "downvotes": 2, "upvotes": 9, "type": "COMMENTED", "answerId": 10,
                "content": "Curabitur sollicitudin semper eros id egestas. Ut ullamcorper, justo vitae ullamcorper interdum, magna lorem dictum odio, sit amet ultricies risus massa in dui.",
            },
            {
                "id": 12, "qId": 1, "author": "David", "time": "yesterday", "downvotes": 2, "upvotes": 11, "type": "COMMENTED", "answerId": 10,
                "content": "Praesent posuere enim eget tortor molestie, eget dignissim elit lobortis.",
            },
            {
                "id": 13, "qId": 1, "author": "Joseph", "time": "yesterday", "downvotes": 5, "upvotes": 1, "type": "COMMENTED", "answerId": 10,
                "content": "Curabitur id odio nunc. Sed rhoncus magna sollicitudin justo pharetra, sed tincidunt magna semper. Vivamus ut mollis tortor. ",
            },
            {
                "id": 14, "qId": 1, "author": "Uma Thurman", "time": "yesterday", "downvotes": 1, "upvotes": 13, "type": "COMMENTED", "answerId": 10,
                "content": "Suspendisse tincidunt massa justo, sed tincidunt neque accumsan et. Fusce venenatis dolor sed blandit vestibulum.",
            },
            {
                "id": 15, "qId": 1, "author": "Triss Merigold", "time": "two days", "downvotes": 11, "upvotes": 15, "type": "ANSWERED", "relDis": false,
                "content": "Suspendisse finibus, odio non varius feugiat, diam nisi lacinia lacus, et tempus orci est sed ex.",
            },
            {
                "id": 16, "qId": 1, "author": "James T. Kirk", "time": "yesterday", "downvotes": 0, "upvotes": 6, "type": "ANSWERED", "relDis": true,
                "content": "Vivamus malesuada erat lacinia, eleifend enim non, faucibus nibh. Donec porta, magna quis finibus varius, orci justo dapibus orci, vel dapibus risus nulla at elit.",
            },
            {
                "id": 17, "qId": 2, "author": "Drizzt Do'Urden", "time": "two days", "downvotes": 8, "upvotes": 4, "type": "ANSWERED", "relDis": false,
                "content": "Nullam lacinia dolor nunc. Mauris dignissim nisl viverra tellus fermentum molestie. Duis maximus in odio vel posuere.",
            },
            {
                "id": 18, "qId": 2, "author": "Geralt", "time": "yesterday", "downvotes": 4, "upvotes": 18, "type": "ANSWERED", "relDis": true,
                "content": "In consequat metus eros, a ullamcorper nibh ultrices vitae. Praesent et ligula arcu. Aliquam tincidunt dapibus lacus eu mollis.",
            },
            {
                "id": 19, "qId": 2, "author": "Vladimir Putin", "time": "yesterday", "downvotes": 10, "upvotes": 16, "type": "COMMENTED", "answerId": 18,
                "content": "Aenean faucibus orci elit, at pellentesque tortor consequat in.",
            },
            // Untested data for questions id > 2
            {
                "id": 20, "qId": 3, "author": "Tom Hanks", "time": "yesterday", "downvotes": 0, "upvotes": 19, "type": "ANSWERED", "relDis": true,
                "content": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
            },
            {
                "id": 21, "qId": 3, "author": "Bill Gates", "time": "yesterday", "downvotes": 2, "upvotes": 5, "type": "COMMENTED", "answerId": 20,
                "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
                "id": 22, "qId": 3, "author": "Frank", "time": "yesterday", "downvotes": 1, "upvotes": 3, "type": "COMMENTED", "answerId": 20,
                "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                "id": 23, "qId": 3, "author": "Paulina", "time": "two days", "downvotes": 0, "upvotes": 6, "type": "ANSWERED", "relDis": false,
                "content": "Quisque tincidunt purus ipsum, at elementum arcu consectetur vitae. Fusce nec arcu arcu.",
            },
            {
                "id": 24, "qId": 3, "author": "Tom Cruise", "time": "three days", "downvotes": 9, "upvotes": 7, "type": "ANSWERED", "relDis": true,
                "content": "Quisque dapibus convallis metus. Praesent at dui ac tellus facilisis pulvinar vitae non ex. Vestibulum facilisis, massa vel aliquet ultrices, erat tellus pellentesque sapien, a consequat erat sem sit amet lacus.",
            },
            {
                "id": 25, "qId": 3, "author": "Brad Pitt", "time": "two days", "downvotes": 1, "upvotes": 8, "type": "COMMENTED", "answerId": 24,
                "content": "Nam non erat sed purus ultrices rutrum quis ut arcu. Nulla facilisi. Duis nunc tellus, pulvinar ornare est ut, euismod sollicitudin lectus. Nunc eget elit sit amet nulla dignissim volutpat non sed libero.",
            },
            {
                "id": 26, "qId": 3, "author": "John Depp", "time": "yesterday", "downvotes": 0, "upvotes": 12, "type": "COMMENTED", "answerId": 24,
                "content": "Praesent eget commodo nibh, vitae vehicula mauris. Morbi id arcu lacinia, congue est nec, posuere orci.",
            },
            {
                "id": 27, "qId": 4, "author": "Ed", "time": "yesterday", "downvotes": 0, "upvotes": 2, "type": "ANSWERED", "relDis": true,
                "content": "Donec elementum, justo at sagittis dignissim, est metus blandit neque, et maximus tortor diam sit amet massa.",
            },
            {
                "id": 28, "qId": 4, "author": "Bruce Willis", "time": "yesterday", "downvotes": 0, "upvotes": 3, "type": "COMMENTED", "answerId": 27,
                "content": "In ullamcorper venenatis dolor, in malesuada augue. Curabitur convallis dui elit, ut egestas erat consequat non. Praesent non dolor nec augue dapibus mollis.",
            },
            {
                "id": 29, "qId": 4, "author": "Arnold Schwarzenegger", "time": "yesterday", "downvotes": 6, "upvotes": 12, "type": "COMMENTED", "answerId": 27,
                "content": "Sed euismod lorem dolor, sed ornare sapien consectetur ut. Proin dui dui, lobortis sed felis id, condimentum ultricies velit.",
            },
            {
                "id": 30, "qId": 4, "author": "Sylvia", "time": "three days", "downvotes": 1, "upvotes": 8, "type": "ANSWERED", "relDis": true,
                "content": "Maecenas quis mauris vel nisi faucibus eleifend sit amet nec orci. Donec vulputate, sapien ac ornare efficitur, dui lectus molestie odio, nec gravida mauris eros in purus.",
            },
            {
                "id": 31, "qId": 4, "author": "Patricia", "time": "two days", "downvotes": 2, "upvotes": 9, "type": "COMMENTED", "answerId": 30,
                "content": "Curabitur sollicitudin semper eros id egestas. Ut ullamcorper, justo vitae ullamcorper interdum, magna lorem dictum odio, sit amet ultricies risus massa in dui.",
            },
            {
                "id": 32, "qId": 4, "author": "David", "time": "yesterday", "downvotes": 2, "upvotes": 11, "type": "COMMENTED", "answerId": 30,
                "content": "Praesent posuere enim eget tortor molestie, eget dignissim elit lobortis.",
            },
            {
                "id": 33, "qId": 4, "author": "Joseph", "time": "yesterday", "downvotes": 5, "upvotes": 1, "type": "COMMENTED", "answerId": 30,
                "content": "Curabitur id odio nunc. Sed rhoncus magna sollicitudin justo pharetra, sed tincidunt magna semper. Vivamus ut mollis tortor. ",
            },
            {
                "id": 34, "qId": 4, "author": "Uma Thurman", "time": "yesterday", "downvotes": 1, "upvotes": 13, "type": "COMMENTED", "answerId": 30,
                "content": "Suspendisse tincidunt massa justo, sed tincidunt neque accumsan et. Fusce venenatis dolor sed blandit vestibulum.",
            },
            {
                "id": 35, "qId": 4, "author": "Triss Merigold", "time": "two days", "downvotes": 11, "upvotes": 15, "type": "ANSWERED", "relDis": false,
                "content": "Suspendisse finibus, odio non varius feugiat, diam nisi lacinia lacus, et tempus orci est sed ex.",
            },
            {
                "id": 36, "qId": 4, "author": "James T. Kirk", "time": "yesterday", "downvotes": 0, "upvotes": 6, "type": "ANSWERED", "relDis": true,
                "content": "Vivamus malesuada erat lacinia, eleifend enim non, faucibus nibh. Donec porta, magna quis finibus varius, orci justo dapibus orci, vel dapibus risus nulla at elit.",
            },
            {
                "id": 37, "qId": 5, "author": "Drizzt Do'Urden", "time": "two days", "downvotes": 8, "upvotes": 4, "type": "ANSWERED", "relDis": false,
                "content": "Nullam lacinia dolor nunc. Mauris dignissim nisl viverra tellus fermentum molestie. Duis maximus in odio vel posuere.",
            },
            {
                "id": 38, "qId": 5, "author": "Geralt", "time": "yesterday", "downvotes": 4, "upvotes": 18, "type": "ANSWERED", "relDis": true,
                "content": "In consequat metus eros, a ullamcorper nibh ultrices vitae. Praesent et ligula arcu. Aliquam tincidunt dapibus lacus eu mollis.",
            },
            {
                "id": 39, "qId": 5, "author": "Vladimir Putin", "time": "yesterday", "downvotes": 10, "upvotes": 16, "type": "COMMENTED", "answerId": 38,
                "content": "Aenean faucibus orci elit, at pellentesque tortor consequat in.",
            },
        ];

        return { dictionary, authors, questions, comments };
    }
}