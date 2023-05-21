import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadError",
        loc: { start: 17, end: 29 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 34, end: 39 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PayloadErrorType",
                loc: { start: 41, end: 57 },
              },
              loc: { start: 41, end: 57 },
            },
            loc: { start: 41, end: 58 },
          },
          directives: [],
          loc: { start: 34, end: 58 },
        },
      ],
      loc: { start: 12, end: 60 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadErrorType",
        loc: { start: 67, end: 83 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 88, end: 97 },
          },
          directives: [],
          loc: { start: 88, end: 97 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 100, end: 122 },
          },
          directives: [],
          loc: { start: 100, end: 122 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 125, end: 140 },
          },
          directives: [],
          loc: { start: 125, end: 140 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 143, end: 159 },
          },
          directives: [],
          loc: { start: 143, end: 159 },
        },
      ],
      loc: { start: 62, end: 161 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 170, end: 178 } },
      directives: [],
      loc: { start: 163, end: 178 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 191, end: 196 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 201, end: 205 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 206, end: 208 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 210, end: 212 },
                  },
                  loc: { start: 210, end: 212 },
                },
                loc: { start: 210, end: 213 },
              },
              directives: [],
              loc: { start: 206, end: 213 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 216, end: 227 },
              },
              loc: { start: 216, end: 227 },
            },
            loc: { start: 216, end: 228 },
          },
          directives: [],
          loc: { start: 201, end: 228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 231, end: 239 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 240, end: 242 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 244, end: 246 },
                  },
                  loc: { start: 244, end: 246 },
                },
                loc: { start: 244, end: 247 },
              },
              directives: [],
              loc: { start: 240, end: 247 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 250, end: 258 },
            },
            loc: { start: 250, end: 258 },
          },
          directives: [],
          loc: { start: 231, end: 258 },
        },
      ],
      loc: { start: 179, end: 260 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 267, end: 271 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 276, end: 278 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 280, end: 282 },
              },
              loc: { start: 280, end: 282 },
            },
            loc: { start: 280, end: 283 },
          },
          directives: [],
          loc: { start: 276, end: 283 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 286, end: 290 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 292, end: 298 },
              },
              loc: { start: 292, end: 298 },
            },
            loc: { start: 292, end: 299 },
          },
          directives: [],
          loc: { start: 286, end: 299 },
        },
      ],
      loc: { start: 262, end: 301 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 308, end: 318 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 323, end: 329 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 331, end: 335 },
            },
            loc: { start: 331, end: 335 },
          },
          directives: [],
          loc: { start: 323, end: 335 },
        },
      ],
      loc: { start: 303, end: 337 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 345, end: 356 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 359, end: 369 },
          },
          loc: { start: 359, end: 369 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "PayloadError",
            loc: { start: 372, end: 384 },
          },
          loc: { start: 372, end: 384 },
        },
      ],
      loc: { start: 339, end: 384 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 391, end: 401 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 406, end: 408 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 410, end: 412 },
              },
              loc: { start: 410, end: 412 },
            },
            loc: { start: 410, end: 413 },
          },
          directives: [],
          loc: { start: 406, end: 413 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 416, end: 423 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 425, end: 431 },
              },
              loc: { start: 425, end: 431 },
            },
            loc: { start: 425, end: 432 },
          },
          directives: [],
          loc: { start: 416, end: 432 },
        },
      ],
      loc: { start: 386, end: 434 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 441, end: 449 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 454, end: 456 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 458, end: 460 },
              },
              loc: { start: 458, end: 460 },
            },
            loc: { start: 458, end: 461 },
          },
          directives: [],
          loc: { start: 454, end: 461 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 464, end: 475 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 477, end: 480 },
              },
              loc: { start: 477, end: 480 },
            },
            loc: { start: 477, end: 481 },
          },
          directives: [],
          loc: { start: 464, end: 481 },
        },
      ],
      loc: { start: 436, end: 483 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 491, end: 499 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 502, end: 512 },
          },
          loc: { start: 502, end: 512 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 515, end: 523 },
          },
          loc: { start: 515, end: 523 },
        },
      ],
      loc: { start: 485, end: 523 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 536, end: 541 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "breakdown",
            loc: { start: 546, end: 555 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RealTimeFinancingBreakdown",
                loc: { start: 557, end: 583 },
              },
              loc: { start: 557, end: 583 },
            },
            loc: { start: 557, end: 584 },
          },
          directives: [],
          loc: { start: 546, end: 584 },
        },
      ],
      loc: { start: 524, end: 586 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PriceAmount",
        loc: { start: 593, end: 604 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 609, end: 615 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 617, end: 622 },
            },
            loc: { start: 617, end: 622 },
          },
          directives: [],
          loc: { start: 609, end: 622 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "amountDisplayed",
            loc: { start: 625, end: 640 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 642, end: 649 },
            },
            loc: { start: 642, end: 649 },
          },
          directives: [],
          loc: { start: 625, end: 649 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "currency",
            loc: { start: 652, end: 660 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 662, end: 668 },
            },
            loc: { start: 662, end: 668 },
          },
          directives: [],
          loc: { start: 652, end: 668 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "display",
            loc: { start: 671, end: 678 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "locale",
                loc: { start: 679, end: 685 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 687, end: 693 },
                },
                loc: { start: 687, end: 693 },
              },
              directives: [],
              loc: { start: 679, end: 693 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 696, end: 702 },
            },
            loc: { start: 696, end: 702 },
          },
          directives: [],
          loc: { start: 671, end: 702 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "includingVat",
            loc: { start: 705, end: 717 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 719, end: 726 },
              },
              loc: { start: 719, end: 726 },
            },
            loc: { start: 719, end: 727 },
          },
          directives: [],
          loc: { start: 705, end: 727 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "selector",
            loc: { start: 730, end: 738 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 740, end: 746 },
            },
            loc: { start: 740, end: 746 },
          },
          directives: [],
          loc: { start: 730, end: 746 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "source",
            loc: { start: 749, end: 755 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 757, end: 763 },
              },
              loc: { start: 757, end: 763 },
            },
            loc: { start: 757, end: 764 },
          },
          directives: [],
          loc: { start: 749, end: 764 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "taxAmount",
            loc: { start: 767, end: 776 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 778, end: 783 },
            },
            loc: { start: 778, end: 783 },
          },
          directives: [],
          loc: { start: 767, end: 783 },
        },
      ],
      loc: { start: 588, end: 785 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PricePoint",
        loc: { start: 792, end: 802 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayPrice",
            loc: { start: 807, end: 819 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 821, end: 832 },
            },
            loc: { start: 821, end: 832 },
          },
          directives: [],
          loc: { start: 807, end: 832 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "priceExclTax",
            loc: { start: 835, end: 847 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 849, end: 860 },
            },
            loc: { start: 849, end: 860 },
          },
          directives: [],
          loc: { start: 835, end: 860 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "priceInclNonVatTax",
            loc: { start: 863, end: 881 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 883, end: 894 },
            },
            loc: { start: 883, end: 894 },
          },
          directives: [],
          loc: { start: 863, end: 894 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "priceInclTax",
            loc: { start: 897, end: 909 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 911, end: 922 },
            },
            loc: { start: 911, end: 922 },
          },
          directives: [],
          loc: { start: 897, end: 922 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "priceInclVat",
            loc: { start: 925, end: 937 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 939, end: 950 },
            },
            loc: { start: 939, end: 950 },
          },
          directives: [],
          loc: { start: 925, end: 950 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "taxAmount",
            loc: { start: 953, end: 962 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 964, end: 975 },
            },
            loc: { start: 964, end: 975 },
          },
          directives: [],
          loc: { start: 953, end: 975 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "vatAmount",
            loc: { start: 978, end: 987 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 989, end: 1000 },
            },
            loc: { start: 989, end: 1000 },
          },
          directives: [],
          loc: { start: 978, end: 1000 },
        },
      ],
      loc: { start: 787, end: 1002 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RealTimeFinancingBreakdown",
        loc: { start: 1009, end: 1035 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "adjustedPreFinancingAmount",
            loc: { start: 1040, end: 1066 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PricePoint",
              loc: { start: 1068, end: 1078 },
            },
            loc: { start: 1068, end: 1078 },
          },
          directives: [],
          loc: { start: 1040, end: 1078 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditAmount",
            loc: { start: 1081, end: 1093 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 1095, end: 1106 },
            },
            loc: { start: 1095, end: 1106 },
          },
          directives: [],
          loc: { start: 1081, end: 1106 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "excessMileageRate",
            loc: { start: 1109, end: 1126 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 1128, end: 1133 },
            },
            loc: { start: 1128, end: 1133 },
          },
          directives: [],
          loc: { start: 1109, end: 1133 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalPaymentAmount",
            loc: { start: 1136, end: 1154 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 1156, end: 1167 },
            },
            loc: { start: 1156, end: 1167 },
          },
          directives: [],
          loc: { start: 1136, end: 1167 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "financeDiscountContribution",
            loc: { start: 1170, end: 1197 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PricePoint",
              loc: { start: 1199, end: 1209 },
            },
            loc: { start: 1199, end: 1209 },
          },
          directives: [],
          loc: { start: 1170, end: 1209 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "financedAmount",
            loc: { start: 1212, end: 1226 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 1228, end: 1239 },
            },
            loc: { start: 1228, end: 1239 },
          },
          directives: [],
          loc: { start: 1212, end: 1239 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "interestAmount",
            loc: { start: 1242, end: 1256 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 1258, end: 1269 },
            },
            loc: { start: 1258, end: 1269 },
          },
          directives: [],
          loc: { start: 1242, end: 1269 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "perInstallmentPrice",
            loc: { start: 1272, end: 1291 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 1293, end: 1304 },
            },
            loc: { start: 1293, end: 1304 },
          },
          directives: [],
          loc: { start: 1272, end: 1304 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "preFinancingPrice",
            loc: { start: 1307, end: 1324 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PricePoint",
              loc: { start: 1326, end: 1336 },
            },
            loc: { start: 1326, end: 1336 },
          },
          directives: [],
          loc: { start: 1307, end: 1336 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "referenceId",
            loc: { start: 1339, end: 1350 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1352, end: 1358 },
            },
            loc: { start: 1352, end: 1358 },
          },
          directives: [],
          loc: { start: 1339, end: 1358 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalDeposit",
            loc: { start: 1361, end: 1373 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PricePoint",
              loc: { start: 1375, end: 1385 },
            },
            loc: { start: 1375, end: 1385 },
          },
          directives: [],
          loc: { start: 1361, end: 1385 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalPayableAmount",
            loc: { start: 1388, end: 1406 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PriceAmount",
              loc: { start: 1408, end: 1419 },
            },
            loc: { start: 1408, end: 1419 },
          },
          directives: [],
          loc: { start: 1388, end: 1419 },
        },
      ],
      loc: { start: 1004, end: 1421 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1434, end: 1439 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1444, end: 1448 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1449, end: 1451 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1453, end: 1455 },
                  },
                  loc: { start: 1453, end: 1455 },
                },
                loc: { start: 1453, end: 1456 },
              },
              directives: [],
              loc: { start: 1449, end: 1456 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1459, end: 1463 },
            },
            loc: { start: 1459, end: 1463 },
          },
          directives: [],
          loc: { start: 1444, end: 1463 },
        },
      ],
      loc: { start: 1422, end: 1465 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1472, end: 1476 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1481, end: 1483 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1485, end: 1487 },
              },
              loc: { start: 1485, end: 1487 },
            },
            loc: { start: 1485, end: 1488 },
          },
          directives: [],
          loc: { start: 1481, end: 1488 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 1491, end: 1499 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1501, end: 1507 },
              },
              loc: { start: 1501, end: 1507 },
            },
            loc: { start: 1501, end: 1508 },
          },
          directives: [],
          loc: { start: 1491, end: 1508 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 1511, end: 1520 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Book",
                    loc: { start: 1523, end: 1527 },
                  },
                  loc: { start: 1523, end: 1527 },
                },
                loc: { start: 1523, end: 1528 },
              },
              loc: { start: 1522, end: 1529 },
            },
            loc: { start: 1522, end: 1530 },
          },
          directives: [],
          loc: { start: 1511, end: 1530 },
        },
      ],
      loc: { start: 1467, end: 1532 },
    },
  ],
  loc: { start: 0, end: 1533 },
} as unknown as DocumentNode;
