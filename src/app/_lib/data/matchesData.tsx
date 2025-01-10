import { IMatch } from "@/_lib/types/Match";
import { LocationType, QualificationTag } from "@/_lib/types/Team";

export const matchesDummy: IMatch[] = [
  {
    id: 0,
    teams: [
      {
        id: 780,
        name: "Johnson, Sophia",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        qualificationTag: QualificationTag.LL,
        flag: "CA",
        scores: [1, 7, 4],
      },
      {
        id: 551,
        name: "Garcia, Hiroshi",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "PL",
        scores: [5, 4, 7],
      },
    ],
    date: "17 May 2024, 20:00",
    location: "Court 2",
  },
  {
    id: 1,
    teams: [
      {
        id: 757,
        name: "Smith, Sophia",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "US",
        qualificationTag: QualificationTag.PR,
        scores: [2, 5, 4],
      },
      {
        id: 389,
        name: "Smith, Emily",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "ES",
        scores: [2, 0, 0],
      },
    ],
    date: "21 Jul 2024, 16:00",
    location: "Court 1",
  },
  {
    id: 2,
    teams: [
      {
        id: 971,
        name: "Silva, Michael",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "BR",
        qualificationTag: QualificationTag.Q,
        scores: [2, 1, 5],
      },
      {
        id: 101,
        name: "Dubois, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "JP",
        scores: [3, 0, 5],
        qualificationTag: QualificationTag.LL,
      },
    ],
    date: "12 Oct 2024, 12:00",
    location: "Court 6",
  },
  {
    id: 3,
    teams: [
      {
        id: 453,
        name: "Rossi, Sophia",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "FR",
        qualificationTag: QualificationTag.PR,
        scores: [6, 0, 7],
      },
      {
        id: 272,
        name: "Smith, Michael",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "JP",
        scores: [6, 0, 1],
      },
    ],
    date: "26 Sep 2024, 14:30",
    location: "Court 4",
  },
  {
    id: 4,
    teams: [
      {
        id: 253,
        name: "Garcia, Maria",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "CA",
        scores: [3, 2, 1],
      },
      {
        id: 293,
        name: "Smith, John",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "PL",
        qualificationTag: QualificationTag.LL,
        scores: [7, 7, 2],
      },
    ],
    date: "21 Mar 2024, 12:00",
    location: "Court 7",
  },
  {
    id: 5,
    teams: [
      {
        id: 246,
        name: "M\u00fcller, John",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "BR",
        scores: [7, 0, 4],
      },
      {
        id: 311,
        name: "Tanaka, Luca",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "JP",
        qualificationTag: QualificationTag.PR,
        scores: [4, 1, 7],
      },
    ],
    date: "8 Nov 2024, 17:30",
    location: "Court 4",
  },
  {
    id: 6,
    teams: [
      {
        id: 578,
        name: "Dubois, Maria",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "JP",
        scores: [5, 7, 1],
      },
      {
        id: 397,
        name: "Dubois, Maria",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "AU",
        scores: [1, 2, 3],
      },
    ],
    date: "21 Mar 2024, 16:30",
    location: "Court 3",
  },
  {
    id: 7,
    teams: [
      {
        id: 850,
        name: "Tanaka, John",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "IT",
        scores: [0, 3, 0],
      },
      {
        id: 998,
        name: "M\u00fcller, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "DE",
        qualificationTag: QualificationTag.SE,
        scores: [4, 5, 4],
      },
    ],
    date: "1 Jun 2024, 16:30",
    location: "Court 2",
  },
  {
    id: 8,
    teams: [
      {
        id: 574,
        name: "Rossi, Sakura",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "CA",
        scores: [7, 6, 6],
      },
      {
        id: 771,
        name: "Garcia, Maria",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "PL",
        scores: [5, 5, 6],
      },
    ],
    date: "28 Dec 2024, 11:00",
    location: "Court 2",
  },
  {
    id: 9,
    teams: [
      {
        id: 627,
        name: "Smith, Sophia",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "PL",
        qualificationTag: QualificationTag.PR,
        scores: [2, 0, 3],
      },
      {
        id: 281,
        name: "M\u00fcller, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "DE",
        scores: [5, 0, 3],
      },
    ],
    date: "16 Jul 2024, 16:00",
    location: "Court 5",
  },
  {
    id: 10,
    teams: [
      {
        id: 962,
        name: "Johnson, Luca",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "IT",
        scores: [3, 5, 0],
      },
      {
        id: 521,
        name: "Tanaka, Hiroshi",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "AU",
        scores: [4, 7, 5],
      },
    ],
    date: "3 Aug 2024, 20:30",
    location: "Court 10",
  },
  {
    id: 11,
    teams: [
      {
        id: 371,
        name: "Smith, Hiroshi",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "IT",
        scores: [1, 6, 2],
      },
      {
        id: 716,
        name: "Kowalski, Sakura",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "AU",
        qualificationTag: QualificationTag.WC,
        scores: [2, 0, 3],
      },
    ],
    date: "15 Sep 2024, 18:00",
    location: "Court 7",
  },
  {
    id: 12,
    teams: [
      {
        id: 314,
        name: "M\u00fcller, John",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "CA",
        scores: [3, 3, 6],
      },
      {
        id: 395,
        name: "M\u00fcller, Sophia",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "PL",
        scores: [4, 2, 7],
      },
    ],
    date: "24 Sep 2024, 14:00",
    location: "Court 10",
  },
  {
    id: 13,
    teams: [
      {
        id: 172,
        name: "Nowak, Sophia",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "FR",
        scores: [3, 1, 1],
      },
      {
        id: 720,
        name: "Garcia, Sakura",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "BR",
        qualificationTag: QualificationTag.WC,
        scores: [0, 0, 4],
      },
    ],
    date: "11 Jun 2024, 12:00",
    location: "Court 4",
  },
  {
    id: 14,
    teams: [
      {
        id: 590,
        name: "Dubois, Sakura",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "BR",
        scores: [3, 0, 0],
      },
      {
        id: 623,
        name: "Rossi, Jan",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "DE",
        scores: [5, 6, 3],
      },
    ],
    date: "16 Apr 2024, 11:00",
    location: "Court 10",
  },
  {
    id: 15,
    teams: [
      {
        id: 941,
        name: "Rossi, Maria",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "BR",
        scores: [6, 2, 4],
      },
      {
        id: 307,
        name: "Johnson, Sakura",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "US",
        scores: [6, 7, 3],
      },
    ],
    date: "5 May 2024, 20:30",
    location: "Court 2",
  },
  {
    id: 16,
    teams: [
      {
        id: 451,
        name: "Johnson, Jan",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "ES",
        scores: [1, 5, 4],
      },
      {
        id: 621,
        name: "Johnson, Luca",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "PL",
        scores: [7, 2, 4],
      },
    ],
    date: "24 Jul 2024, 11:30",
    location: "Court 5",
  },
  {
    id: 17,
    teams: [
      {
        id: 746,
        name: "Rossi, Michael",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "FR",
        scores: [0, 1, 6],
      },
      {
        id: 795,
        name: "Tanaka, Hiroshi",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "CA",
        scores: [0, 1, 1],
      },
    ],
    date: "19 Jan 2024, 13:30",
    location: "Court 7",
  },
  {
    id: 18,
    teams: [
      {
        id: 332,
        name: "Kowalski, Jan",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "CA",
        scores: [3, 0, 7],
      },
      {
        id: 575,
        name: "Silva, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "PL",
        qualificationTag: QualificationTag.SE,
        scores: [2, 5, 0],
      },
    ],
    date: "27 Aug 2024, 16:30",
    location: "Court 9",
  },
  {
    id: 19,
    teams: [
      {
        id: 951,
        name: "Dubois, John",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "PL",
        scores: [0, 5, 5],
      },
      {
        id: 889,
        name: "Kowalski, Maria",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "BR",
        scores: [2, 4, 1],
      },
    ],
    date: "24 Oct 2024, 13:30",
    location: "Court 5",
  },
  {
    id: 20,
    teams: [
      {
        id: 150,
        name: "Kowalski, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "US",
        scores: [5, 0, 5],
      },
      {
        id: 988,
        name: "Johnson, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "JP",
        scores: [0, 0, 2],
      },
    ],
    date: "25 Mar 2024, 13:00",
    location: "Court 2",
  },
  {
    id: 21,
    teams: [
      {
        id: 327,
        name: "M\u00fcller, Sophia",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "CA",
        qualificationTag: QualificationTag.Q,
        scores: [4, 1, 5],
      },
      {
        id: 743,
        name: "Dubois, Emily",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "JP",
        scores: [7, 3, 2],
      },
    ],
    date: "12 Mar 2024, 18:30",
    location: "Court 1",
  },
  {
    id: 22,
    teams: [
      {
        id: 428,
        name: "Johnson, Michael",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "BR",
        scores: [3, 3, 7],
      },
      {
        id: 441,
        name: "M\u00fcller, John",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "FR",
        scores: [0, 4, 2],
      },
    ],
    date: "21 Nov 2024, 11:00",
    location: "Court 4",
  },
  {
    id: 23,
    teams: [
      {
        id: 543,
        name: "Silva, Maria",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "ES",
        scores: [6, 1, 6],
      },
      {
        id: 110,
        name: "Silva, Michael",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "IT",
        scores: [1, 4, 5],
      },
    ],
    date: "21 Mar 2024, 13:00",
    location: "Court 8",
  },
  {
    id: 24,
    teams: [
      {
        id: 677,
        name: "Smith, Emily",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "AU",
        scores: [6, 0, 3],
      },
      {
        id: 994,
        name: "Smith, Sakura",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "DE",
        scores: [2, 5, 2],
      },
    ],
    date: "28 Oct 2024, 11:30",
    location: "Court 10",
  },
  {
    id: 25,
    teams: [
      {
        id: 779,
        name: "Tanaka, Emily",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "US",
        qualificationTag: QualificationTag.SE,
        scores: [6, 0, 2],
      },
      {
        id: 160,
        name: "Nowak, Maria",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "CA",
        scores: [0, 6, 0],
      },
    ],
    date: "4 May 2024, 13:00",
    location: "Court 3",
  },
  {
    id: 26,
    teams: [
      {
        id: 106,
        name: "Rossi, Hiroshi",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "ES",
        scores: [6, 2, 3],
      },
      {
        id: 654,
        name: "Kowalski, Jan",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "AU",
        scores: [3, 0, 2],
      },
    ],
    date: "3 Nov 2024, 15:30",
    location: "Court 2",
  },
  {
    id: 27,
    teams: [
      {
        id: 564,
        name: "Tanaka, John",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "BR",
        scores: [7, 2, 0],
      },
      {
        id: 919,
        name: "Silva, Hiroshi",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "CA",
        scores: [6, 2, 5],
      },
    ],
    date: "18 Sep 2024, 14:00",
    location: "Court 7",
  },
  {
    id: 28,
    teams: [
      {
        id: 789,
        name: "M\u00fcller, Sophia",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "JP",
        scores: [0, 6, 5],
      },
      {
        id: 383,
        name: "Garcia, Jan",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "DE",
        scores: [0, 4, 6],
      },
    ],
    date: "25 Jun 2024, 11:30",
    location: "Court 2",
  },
  {
    id: 29,
    teams: [
      {
        id: 169,
        name: "Nowak, Sakura",
        location: {
          type: LocationType.CLUB,
          name: "City",
        },
        flag: "AU",
        scores: [2, 6, 4],
      },
      {
        id: 347,
        name: "Kowalski, Emily",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "IT",
        scores: [2, 5, 4],
      },
    ],
    date: "3 Apr 2024, 14:00",
    location: "Court 5",
  },
  {
    id: 30,
    teams: [
      {
        id: 962,
        name: "M\u00fcller, Hiroshi",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "IT",
        scores: [7, 7, 4],
      },
      {
        id: 408,
        name: "Garcia, Jan",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "PL",
        scores: [0, 1, 5],
      },
    ],
    date: "25 Jul 2024, 11:30",
    location: "Court 7",
  },
  {
    id: 31,
    teams: [
      {
        id: 586,
        name: "Silva, Maria",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "US",
        scores: [5, 6, 3],
      },
      {
        id: 160,
        name: "Smith, Hiroshi",
        location: {
          type: LocationType.CLUB,
          name: "Name of Club",
        },
        flag: "BR",
        scores: [0, 4, 1],
      },
    ],
    date: "10 Jan 2024, 13:30",
    location: "Court 2",
  },
];
