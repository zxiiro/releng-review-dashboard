userdata['ecelgp'] = {
  "identity": ids["ecelgp"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1528129442000,
  "lastActiveDate": 1529531073000,
  "activeDayCount": 2,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I329b3c756826250358b20aeb2454cb5650d87f59",
      "commitNumber": 11473,
      "subject": "Change project to clone by jjb-deploy",
      "owner": ids["ecelgp"],
      "url": "https://gerrit.linuxfoundation.org/infra/11473",
      "commitMessage": "Change project to clone by jjb-deploy\n\nWhen \"jjb-deploy\" is invoked from a gerrit patch, we do not\nwant to clone the patch project code ($GERRIT_PROJECT) but\nthe releng/builder code ($PROJECT).\n\nChange-Id: I329b3c756826250358b20aeb2454cb5650d87f59\nSigned-off-by: Luis Gomez \u003cecelgp@gmail.com\u003e\n",
      "createdOnDate": 1529529316000,
      "lastUpdatedDate": 1529531073000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1529529316000,
          "reviewer": ids["ecelgp"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1529529569000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/587/"
        },
        {
          "timestamp": 1529529746000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/587/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/587"
        },
        {
          "timestamp": 1529530469000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1529530613000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1529530652000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1529530866000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/588/"
        },
        {
          "timestamp": 1529531063000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/588/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/588"
        },
        {
          "timestamp": 1529531073000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f483dd9fd096b9ef94a240a5402f785a78af27bf",
          "parents": [
            "2b4fca8ba1a2f7862ebd771d0111c7cbd4e442bf"
          ],
          "ref": "refs/changes/73/11473/1",
          "uploader": ids["ecelgp"],
          "createdOnDate": 1529529316000,
          "author": ids["ecelgp"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529530469000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529529746000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 416,
              "reviewer": ids["zxiiro"],
              "message": "We should add a comment here to say that this is a special case for this job.",
              "patchSetTimestamp": 1529529316000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "5589ae7abbd5d4a8f9f58c0aeaef06984048b975",
          "parents": [
            "2b4fca8ba1a2f7862ebd771d0111c7cbd4e442bf"
          ],
          "ref": "refs/changes/73/11473/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1529530613000,
          "author": ids["ecelgp"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529530652000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1529531073000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529531063000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I414b053a68a105aa4cdc1ab99df9cd9962a080b9",
      "commitNumber": 10964,
      "subject": "Allow any project/branch to deploy jjb jobs",
      "owner": ids["ecelgp"],
      "url": "https://gerrit.linuxfoundation.org/infra/10964",
      "commitMessage": "Allow any project/branch to deploy jjb jobs\n\nThis allows users to trigger the jjb-deploy job from any Gerrit\npatch. It works in 2 different ways:\n\n1. Triggered from ci-management patch\n2. Triggered from non-ci-management patch\n\nIn case 1) it will deploy whatever is from the ci-management patch.\n\nIn case 2) it will instead deploy from HEAD of master in the\nci-management repo.\n\nChange-Id: I414b053a68a105aa4cdc1ab99df9cd9962a080b9\nSigned-off-by: Luis Gomez \u003cecelgp@gmail.com\u003e\n",
      "createdOnDate": 1528129442000,
      "lastUpdatedDate": 1528152238000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1528129442000,
          "reviewer": ids["ecelgp"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1528129450000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/489/"
        },
        {
          "timestamp": 1528129598000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/489/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/489"
        },
        {
          "timestamp": 1528130262000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1\n\nFor some history, this comes from some discussions on a mailing list thread here:\n\nhttps://lists.opendaylight.org/pipermail/integration-dev/2018-June/012078.html"
        },
        {
          "timestamp": 1528131555000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nLuis, what\u0027s the reasoning behind this? I see the mail thread that Thanh linked, but I don\u0027t understand the want to use the \u0027build-job\u0027 keyword on a project that isn\u0027t the ci management repo (releng/builder for ODL) since it\u0027s going to trigger a deployment of the jobs declared in the comment."
        },
        {
          "timestamp": 1528131932000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1528132027000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/491/"
        },
        {
          "timestamp": 1528132209000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/491/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/491"
        },
        {
          "timestamp": 1528132542000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1528132544000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1528152238000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+1"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "aac856f908f42d7f15045ced3867b97e7f99bf9c",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/64/10964/1",
          "uploader": ids["ecelgp"],
          "createdOnDate": 1528129442000,
          "author": ids["ecelgp"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528130262000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528129598000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -4
        },
        {
          "number": 2,
          "revision": "d1fb28b7eb1637042f6d9e56b53b1e6a25b3f8e8",
          "parents": [
            "d1b7f48bb76729ddde974357b4de845db71bb5a8"
          ],
          "ref": "refs/changes/64/10964/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1528131932000,
          "author": ids["ecelgp"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1528132542000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1528132544000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528152238000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528132209000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -4
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ied7ff51a292199675dc944e36f1d821a5a2d045d",
      "commitNumber": 12353,
      "subject": "Add stack create \u0026 delete commands",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12353",
      "commitMessage": "Add stack create \u0026 delete commands\n\nAdd 2 new commands:\n\n    - stack create\n    - stack delete\n\nThese commands allow lftools the ability to create and delete stacks.\n\nIssue: RELENG-235\nChange-Id: Ied7ff51a292199675dc944e36f1d821a5a2d045d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534892757000,
      "lastUpdatedDate": 1536245697000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"],
        ids["jluhrsen"],
        ids["ecelgp"]
      ],
      "comments": [
        {
          "timestamp": 1534892757000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534899122000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535070930000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535071011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ (1/2)"
        },
        {
          "timestamp": 1535071057000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ (2/2)"
        },
        {
          "timestamp": 1535071242000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/247\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/44"
        },
        {
          "timestamp": 1535071402000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535071483000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ (1/2)"
        },
        {
          "timestamp": 1535071544000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ (2/2)"
        },
        {
          "timestamp": 1535071737000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/45\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/248"
        },
        {
          "timestamp": 1536107417000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n@Jamo,Luis,Sam, Just FYI since this affects CSIT jobs."
        },
        {
          "timestamp": 1536245248000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245695000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245697000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f081ab69eb047d734aa85fe7b6d7df59fbcbabc4",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534892757000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 68,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1b2fd8f547dc3d3523aa5e8134c2e33cf440338c",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534899122000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 168,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "ead2f50016c1bfd67b99fa1dce3807d9d4c26800",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535070930000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535071242000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 208,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "0a5942299f83aaa74da3bf1fdf985d4003ce30f3",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535071402000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245248000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245695000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245697000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535071737000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I329b3c756826250358b20aeb2454cb5650d87f59",
        "commitNumber": 11473,
        "subject": "Change project to clone by jjb-deploy",
        "owner": ids["ecelgp"],
        "url": "https://gerrit.linuxfoundation.org/infra/11473",
        "commitMessage": "Change project to clone by jjb-deploy\n\nWhen \"jjb-deploy\" is invoked from a gerrit patch, we do not\nwant to clone the patch project code ($GERRIT_PROJECT) but\nthe releng/builder code ($PROJECT).\n\nChange-Id: I329b3c756826250358b20aeb2454cb5650d87f59\nSigned-off-by: Luis Gomez \u003cecelgp@gmail.com\u003e\n",
        "createdOnDate": 1529529316000,
        "lastUpdatedDate": 1529531073000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1529529316000,
            "reviewer": ids["ecelgp"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1529529569000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/587/"
          },
          {
            "timestamp": 1529529746000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/587/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/587"
          },
          {
            "timestamp": 1529530469000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1529530613000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1529530652000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1529530866000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/588/"
          },
          {
            "timestamp": 1529531063000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/588/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/588"
          },
          {
            "timestamp": 1529531073000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "f483dd9fd096b9ef94a240a5402f785a78af27bf",
            "parents": [
              "2b4fca8ba1a2f7862ebd771d0111c7cbd4e442bf"
            ],
            "ref": "refs/changes/73/11473/1",
            "uploader": ids["ecelgp"],
            "createdOnDate": 1529529316000,
            "author": ids["ecelgp"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529530469000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529529746000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 416,
                "reviewer": ids["zxiiro"],
                "message": "We should add a comment here to say that this is a special case for this job.",
                "patchSetTimestamp": 1529529316000
              }
            ],
            "sizeInsertions": 1,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "5589ae7abbd5d4a8f9f58c0aeaef06984048b975",
            "parents": [
              "2b4fca8ba1a2f7862ebd771d0111c7cbd4e442bf"
            ],
            "ref": "refs/changes/73/11473/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1529530613000,
            "author": ids["ecelgp"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1529530652000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1529531073000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529531063000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 3,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-ci-jobs.yaml",
          "line": 416,
          "reviewer": ids["zxiiro"],
          "message": "We should add a comment here to say that this is a special case for this job.",
          "patchSetTimestamp": 1529529316000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "1": 1
        }
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 3,
        "commentCount": 1,
        "approvals": {
          "-1": 1,
          "1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 2
    }
  },
  "averageTimeInCodeReview": 2429500,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 2
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};