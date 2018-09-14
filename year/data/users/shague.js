userdata['shague'] = {
  "identity": ids["shague"],
  "reviewCountPlus2": 5,
  "reviewCountPlus1": 6,
  "reviewCountMinus1": 1,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1517405525000,
  "lastActiveDate": 1536245697000,
  "activeDayCount": 4,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia1e7b101ee6a3605d6c0ec4ac163a6f8c362921b",
      "commitNumber": 8613,
      "subject": "update docs to use minutes over seconds",
      "owner": ids["shague"],
      "url": "https://gerrit.linuxfoundation.org/infra/8613",
      "commitMessage": "update docs to use minutes over seconds\n\nChange-Id: Ia1e7b101ee6a3605d6c0ec4ac163a6f8c362921b\nSigned-off-by: Sam Hague \u003cshague@redhat.com\u003e\n",
      "createdOnDate": 1517405525000,
      "lastUpdatedDate": 1517407984000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1517405525000,
          "reviewer": ids["shague"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1517405665000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/216/ (1/2)"
        },
        {
          "timestamp": 1517405749000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/67/ (2/2)"
        },
        {
          "timestamp": 1517406507000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/216/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/216\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/67/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/67"
        },
        {
          "timestamp": 1517407982000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1517407984000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "db263225098921ea7ed61ad1e5d7211490458471",
          "parents": [
            "61fe47417032bde7833830f6c5a3ebb2a4c8fe45"
          ],
          "ref": "refs/changes/13/8613/1",
          "uploader": ids["shague"],
          "createdOnDate": 1517405525000,
          "author": ids["shague"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517407982000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517407984000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517406507000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
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
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I2481a364b9ddf2aa0ba9e2168d4ee408ca477c43",
      "commitNumber": 12400,
      "subject": "Deduplicate test requirements",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12400",
      "commitMessage": "Deduplicate test requirements\n\nSome of these tests being pulled in are duplicates. Let\u0027s consolidate\ninto requirements-test.txt as the source of truth.\n\nChange-Id: I2481a364b9ddf2aa0ba9e2168d4ee408ca477c43\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535338093000,
      "lastUpdatedDate": 1536245688000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535338093000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535338170000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/286/"
        },
        {
          "timestamp": 1535338399000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/286/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/286"
        },
        {
          "timestamp": 1536245214000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536245686000,
          "reviewer": ids["shague"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536245688000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "06c14a57395db7be8d17230ae245a0b083c4daad",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/00/12400/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535338093000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245214000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245686000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245688000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535338399000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -7
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I31329886088d8d7a469e19bc0937912546400109",
      "commitNumber": 12398,
      "subject": "Use logger instead of print in version module",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12398",
      "commitMessage": "Use logger instead of print in version module\n\nChange-Id: I31329886088d8d7a469e19bc0937912546400109\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535333153000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535333153000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535333342000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/"
        },
        {
          "timestamp": 1535333579000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/282"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535336312000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/285/"
        },
        {
          "timestamp": 1535336516000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/285/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/285"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535410875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/290/"
        },
        {
          "timestamp": 1535411065000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/290/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/290"
        },
        {
          "timestamp": 1536245282000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1536245586000,
          "reviewer": ids["shague"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "6b091837d9d9ce8e1b6e6172c1030850578551a4",
          "parents": [
            "000bc7ba0ec40ea6c00f54fe8dc73c2ffd7f6d5a"
          ],
          "ref": "refs/changes/98/12398/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535333153000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535333579000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "e1215526be2d06177b551c7a65e6858bf385f4e2",
          "parents": [
            "6d4440a03abada50e2705418f4628047828a0420"
          ],
          "ref": "refs/changes/98/12398/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336516000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "d10d79b4b8b0a95da454aa05436990c608247182",
          "parents": [
            "2e5148cb27a9413a96596ae2fd43bdaba518231e"
          ],
          "ref": "refs/changes/98/12398/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245282000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245586000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411065000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I47235cf9accd362ba1355ff77e15757543d30da1",
      "commitNumber": 12397,
      "subject": "Update config subsystem to use logger",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12397",
      "commitMessage": "Update config subsystem to use logger\n\nUse our logger service in the config subsystem.\n\nChange-Id: I47235cf9accd362ba1355ff77e15757543d30da1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535331970000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535331970000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535332386000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/"
        },
        {
          "timestamp": 1535332617000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/279"
        },
        {
          "timestamp": 1535332996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535333114000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/"
        },
        {
          "timestamp": 1535333361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/281"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535336297000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/284/"
        },
        {
          "timestamp": 1535336509000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/284/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/284"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Patch Set 3 was rebased."
        },
        {
          "timestamp": 1535410838000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/289/"
        },
        {
          "timestamp": 1535411097000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/289/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/289"
        },
        {
          "timestamp": 1536245272000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245541000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "42a2e7a9d9f6c2aa2bb26ee0745816b98d5b7ebe",
          "parents": [
            "8432e5bc9342a5d8bebe47abcfddbd1b48f5f27b"
          ],
          "ref": "refs/changes/97/12397/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331970000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535332617000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "000bc7ba0ec40ea6c00f54fe8dc73c2ffd7f6d5a",
          "parents": [
            "0768f14a36b356d27f855023ecdb8df2aa336210"
          ],
          "ref": "refs/changes/97/12397/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535332996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535333361000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "6d4440a03abada50e2705418f4628047828a0420",
          "parents": [
            "a0c3e6240ecdfddaa940d298b5081d1c00761f03"
          ],
          "ref": "refs/changes/97/12397/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336509000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 4,
          "revision": "2e5148cb27a9413a96596ae2fd43bdaba518231e",
          "parents": [
            "4edf459161faeaebe1614ff16f18101f0785adc6"
          ],
          "ref": "refs/changes/97/12397/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245272000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245541000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411097000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ic35222ee654306e686052c209b641f9e49d38144",
      "commitNumber": 12390,
      "subject": "Only print extra log details in DEBUG mode",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12390",
      "commitMessage": "Only print extra log details in DEBUG mode\n\nThis allow us to change all our print statements to log.info() and\nhave it still print sanely like a CLI application. Then when DEBUG\nmode is enabled it will print the extra details to let us\ntroubleshoot. ERROR and CRITICAL logs will prefix with \"ERROR: \"\nfor example.\n\nChange-Id: Ic35222ee654306e686052c209b641f9e49d38144\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535159160000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535159160000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535159341000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535159575000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/"
        },
        {
          "timestamp": 1535159629000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/"
        },
        {
          "timestamp": 1535159784000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/267"
        },
        {
          "timestamp": 1535159838000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/268"
        },
        {
          "timestamp": 1535159848000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535159935000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/269/"
        },
        {
          "timestamp": 1535160184000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/269/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/269"
        },
        {
          "timestamp": 1535331018000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535331084000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/"
        },
        {
          "timestamp": 1535331302000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/277"
        },
        {
          "timestamp": 1535331970000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1535332047000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/"
        },
        {
          "timestamp": 1535332289000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/278"
        },
        {
          "timestamp": 1535332996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1535333067000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/280/"
        },
        {
          "timestamp": 1535333294000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/280/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/280"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1535336241000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/283/"
        },
        {
          "timestamp": 1535336490000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/283/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/283"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1535410755000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/288/"
        },
        {
          "timestamp": 1535410991000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/288/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/288"
        },
        {
          "timestamp": 1536245294000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+1"
        },
        {
          "timestamp": 1536245533000,
          "reviewer": ids["shague"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a8d91d5ed91aff72e0c0bb859ada7f94af435ad5",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159160000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535159784000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 15,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "0a06d5fe31a4a958ee2cd04c45ad1fb2c7a45373",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159341000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535159838000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 13,
          "sizeDeletions": -2
        },
        {
          "number": 3,
          "revision": "7ddb787508793ff402ff30c2c296fb66218e7b91",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159848000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535160184000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 14,
          "sizeDeletions": -2
        },
        {
          "number": 4,
          "revision": "4c22dec1bf62f9c8c6b6323fe500ca5d6e2d9be9",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331018000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535331302000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 17,
          "sizeDeletions": -2
        },
        {
          "number": 5,
          "revision": "8432e5bc9342a5d8bebe47abcfddbd1b48f5f27b",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331970000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535332289000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 19,
          "sizeDeletions": -2
        },
        {
          "number": 6,
          "revision": "0768f14a36b356d27f855023ecdb8df2aa336210",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535332996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535333294000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -2
        },
        {
          "number": 7,
          "revision": "a0c3e6240ecdfddaa940d298b5081d1c00761f03",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336490000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 22,
          "sizeDeletions": -4
        },
        {
          "number": 8,
          "revision": "4edf459161faeaebe1614ff16f18101f0785adc6",
          "parents": [
            "bf6ca83a3f20a15dd83800f3953cc3f5e449250b"
          ],
          "ref": "refs/changes/90/12390/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245294000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245533000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535410991000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I2229d66f637bd5aab203a3bbf12aa1e677a471a1",
      "commitNumber": 12122,
      "subject": "Add Jenkins Sandbox Cleanup job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12122",
      "commitMessage": "Add Jenkins Sandbox Cleanup job\n\nThis cleanup job runs weekly on Saturdays to clear out Sandbox\njobs and views from the system.\n\nThe benefit of this is that it uses the same version of JJB as\nthe other CI jobs whereas the traditional cron job we put in puppet\ndoes not often get updated to match the right version.\n\nIssue: RELENG-1118\nChange-Id: I2229d66f637bd5aab203a3bbf12aa1e677a471a1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533414562000,
      "lastUpdatedDate": 1533859346000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1533414562000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533414636000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ (1/2)"
        },
        {
          "timestamp": 1533414684000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ (2/2)"
        },
        {
          "timestamp": 1533414875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/687\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/293"
        },
        {
          "timestamp": 1533570613000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nI\u0027m really on the fence with this change. It only solves 1/2 of the configuration problem. That of the Jenkins jobs. It does nothing for the Nexus side for clearing out the job logs that exist in the sandbox holding area which continues to have to be a cron job."
        },
        {
          "timestamp": 1533574810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n\u003e I\u0027m really on the fence with this change. It only solves 1/2 of the\n \u003e configuration problem. That of the Jenkins jobs. It does nothing\n \u003e for the Nexus side for clearing out the job logs that exist in the\n \u003e sandbox holding area which continues to have to be a cron job.\n\nTo be fair the Nexus side is a completely separate step. Even if we ignore this job. It required modifying 2 separate puppet files. One for Jenkins and one for Nexus. Irrespective of this patch it was still a 2 step process previously too. This reduces the steps to 1 but does bring up a point that we need to document the Nexus part in our infrastructure docs."
        },
        {
          "timestamp": 1533651337000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533651424000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ (1/2)"
        },
        {
          "timestamp": 1533651444000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ (2/2)"
        },
        {
          "timestamp": 1533651590000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/294\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/689"
        },
        {
          "timestamp": 1533851963000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859329000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859346000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7ca8d2677a2b1c8738d676feaa776240e878dc9c",
          "parents": [
            "78f0bd978eeadea71fdc31e16de4cc4b8e769b48"
          ],
          "ref": "refs/changes/22/12122/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533414562000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533414875000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 105,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1eda455b5c9e28a98441ddd46a61035dd5f60fe6",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/22/12122/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533651337000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851963000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533859329000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533859346000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533651590000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 97,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If54f43eb3f66d0c6b493495a82a65989fc7ed6c3",
      "commitNumber": 10397,
      "subject": "Add override for GT file-paths in Python jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10397",
      "commitMessage": "Add override for GT file-paths in Python jobs\n\nSome projects may have small Python sub-projects within their\nrepos. This would allow them to only trigger builds when there\nis a change in the relevant directory.\n\nChange-Id: If54f43eb3f66d0c6b493495a82a65989fc7ed6c3\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1525362547000,
      "lastUpdatedDate": 1525385719000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1525362547000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525365384000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ (1/2)"
        },
        {
          "timestamp": 1525365413000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ (2/2)"
        },
        {
          "timestamp": 1525365779000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/405\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/146"
        },
        {
          "timestamp": 1525384770000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1525384844000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1525384880000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ (1/2)"
        },
        {
          "timestamp": 1525384915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ (2/2)"
        },
        {
          "timestamp": 1525384941000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1525385059000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/407\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/147"
        },
        {
          "timestamp": 1525385096000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525385121000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1525385719000,
          "reviewer": ids["dfarrell07"],
          "message": "Change has been successfully merged by Daniel Farrell"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b36b320613a5aeef4d016f73e81c26802b83e0e0",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/97/10397/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1525362547000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1525365779000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-python-jobs.rst",
              "line": 79,
              "reviewer": ids["dfarrell07"],
              "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["dfarrell07"],
              "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["zxiiro"],
              "message": "Thanks for fixing this. Inheritance probably wasn\u0027t coming through properly via the common anchor.",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["dfarrell07"],
              "message": "Np, merge it if you think the fix is okay Thanh",
              "patchSetTimestamp": 1525362547000
            }
          ],
          "sizeInsertions": 24,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "aa256b7a0769f6c9c9906cacb4d87f49e691622c",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/97/10397/2",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1525384770000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525384941000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525385059000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525385096000,
              "grantedBy": ids["dfarrell07"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525385719000,
              "grantedBy": ids["dfarrell07"]
            }
          ],
          "comments": [],
          "sizeInsertions": 26,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I4d269a4dad6ddbd509a134306b61b2214194b479",
      "commitNumber": 9878,
      "subject": "Add generic push changes to gerrit builder",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/9878",
      "commitMessage": "Add generic push changes to gerrit builder\n\nThis is a generic version of the script to push a change through\na job to Gerrit in an automated fashion. Projects can reuse this\nmacros when they have jobs which requires to  push a change to\ngerrit.\n\nRELENG-769\nChange-Id: I4d269a4dad6ddbd509a134306b61b2214194b479\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1523327950000,
      "lastUpdatedDate": 1525385595000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jluhrsen"],
        ids["agrimberg"],
        ids["askb"],
        ids["jwagantall"],
        ids["agardner"],
        ids["bramwelt"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1523327950000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1523328028000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/320/"
        },
        {
          "timestamp": 1523328328000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/320/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/320"
        },
        {
          "timestamp": 1523328669000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1523328972000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/321/"
        },
        {
          "timestamp": 1523329218000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/321/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/321"
        },
        {
          "timestamp": 1523330881000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1523331073000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/322/"
        },
        {
          "timestamp": 1523331363000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/322/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/322"
        },
        {
          "timestamp": 1523374674000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review-1\n\n(3 comments)\n\nThis incorrectly assumes Jenkins is talking with Gerrit as a particular user name structure"
        },
        {
          "timestamp": 1523403632000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1523403685000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1523403815000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/326/"
        },
        {
          "timestamp": 1523404058000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/326/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/326"
        },
        {
          "timestamp": 1523404386000,
          "reviewer": ids["askb"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1523404427000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3:\n\n(2 comments)"
        },
        {
          "timestamp": 1523406069000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1523406261000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/327/"
        },
        {
          "timestamp": 1523406538000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/327/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/327"
        },
        {
          "timestamp": 1523493378000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 6:\n\n(1 comment)"
        },
        {
          "timestamp": 1523493762000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 6:\n\n(2 comments)"
        },
        {
          "timestamp": 1523495406000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1523495468000,
          "reviewer": ids["askb"],
          "message": "Patch Set 7:\n\n(3 comments)"
        },
        {
          "timestamp": 1523495622000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/338/"
        },
        {
          "timestamp": 1523495830000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/338/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/338"
        },
        {
          "timestamp": 1523556389000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 7: Code-Review+1"
        },
        {
          "timestamp": 1523575550000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 7: Code-Review+1"
        },
        {
          "timestamp": 1523576568000,
          "reviewer": ids["shague"],
          "message": "Patch Set 7: Code-Review+1"
        },
        {
          "timestamp": 1523577359000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(5 comments)"
        },
        {
          "timestamp": 1523578055000,
          "reviewer": ids["askb"],
          "message": "Patch Set 7:\n\n(5 comments)"
        },
        {
          "timestamp": 1523578803000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1523578812000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/342/"
        },
        {
          "timestamp": 1523579055000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/342/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/342"
        },
        {
          "timestamp": 1523581663000,
          "reviewer": ids["askb"],
          "message": "Patch Set 8:\n\n(1 comment)"
        },
        {
          "timestamp": 1523979403000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 8: Code-Review-1\n\n(1 comment)\n\nMinor whitespace cleanup. Other than that I think this is ready"
        },
        {
          "timestamp": 1523980180000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1523980287000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1524001651000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1524001759000,
          "reviewer": ids["askb"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1524001836000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/353/"
        },
        {
          "timestamp": 1524002111000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/353/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/353"
        },
        {
          "timestamp": 1524002288000,
          "reviewer": ids["askb"],
          "message": "Patch Set 9: Code-Review+1"
        },
        {
          "timestamp": 1524188959000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 9: Code-Review+1"
        },
        {
          "timestamp": 1524239413000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9: Code-Review-1\n\n(4 comments)"
        },
        {
          "timestamp": 1524272838000,
          "reviewer": ids["askb"],
          "message": "Patch Set 9:\n\n(4 comments)"
        },
        {
          "timestamp": 1524272923000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1524272982000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/383/"
        },
        {
          "timestamp": 1524273142000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/383/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/383"
        },
        {
          "timestamp": 1524506176000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10: Code-Review+1"
        },
        {
          "timestamp": 1524523257000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 10: Code-Review+2"
        },
        {
          "timestamp": 1524523258000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1525385515000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\nMissed this during code review. We should add documentation on how to use this macro to RTD.\n\nhttps://raw.githubusercontent.com/lfit/releng-global-jjb/master/docs/jjb/lf-macros.rst"
        },
        {
          "timestamp": 1525385595000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\n\u003e Missed this during code review. We should add documentation on how\n \u003e to use this macro to RTD.\n \u003e \n \u003e https://raw.githubusercontent.com/lfit/releng-global-jjb/master/docs/jjb/lf-macros.rst\n\nRaised a Jira to track this:\nhttps://jira.linuxfoundation.org/browse/RELENG-945"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e30be8c9a4efb2e9d1f1aa827363718ea6b76590",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/1",
          "uploader": ids["askb"],
          "createdOnDate": 1523327950000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523328328000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "fc9f6b50fe76c9911cc81f4a0077ed4453115e56",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/2",
          "uploader": ids["askb"],
          "createdOnDate": 1523328669000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523329218000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "d50e0032ccef8f1761bc6f6b8f5bc599540ed5d8",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/3",
          "uploader": ids["askb"],
          "createdOnDate": 1523330881000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523374674000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523331363000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 59,
              "reviewer": ids["agrimberg"],
              "message": "This incorrectly assumes that any system that is using this script is communicating with Gerrit as a jenkins-$SILO user. Not all of the LF managed Jenkins systems do that. In many / most cases it\u0027s a proper LFID and ends up being $GLOBALPROJECT-jobbuilder\n\nAs such, this needs to be something that is passed in or a global Jenkins ENV var",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 59,
              "reviewer": ids["askb"],
              "message": "makes sense, let me fix this.",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 73,
              "reviewer": ids["agrimberg"],
              "message": "See above",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 73,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["agrimberg"],
              "message": "See above",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523330881000
            }
          ],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "5ddb1281146539233769aa734934edddf5af36ad",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/4",
          "uploader": ids["askb"],
          "createdOnDate": 1523403632000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "0c8c66f45e8fbb52e4cdbdc713d8dfa0ba367c3e",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/5",
          "uploader": ids["askb"],
          "createdOnDate": 1523403685000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523404058000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "cd869f23a890acf53216671284d8e2ff79e3e8df",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/6",
          "uploader": ids["askb"],
          "createdOnDate": 1523406069000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523406538000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 4,
              "reviewer": ids["jwagantall"],
              "message": "2018?",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 4,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 19,
              "reviewer": ids["jluhrsen"],
              "message": "no \u0027s\u0027",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 19,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 34,
              "reviewer": ids["jluhrsen"],
              "message": "I use --reviewers locally and I have to pass as a space\nseparated list. is it different here somehow?",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 34,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523406069000
            }
          ],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "c9ef2bc42f9dad808bf9e19b7b1e792a7555b64d",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/7",
          "uploader": ids["askb"],
          "createdOnDate": 1523495406000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523577359000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523556389000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523576568000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523495830000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523575550000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 99,
              "reviewer": ids["zxiiro"],
              "message": "See comment in the script, the single quotes being passed here are the cause of the leading / trailing quotes. If we don\u0027t pass them here then I think we can simplify the script?",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 99,
              "reviewer": ids["askb"],
              "message": "The projects which consume this builder would be most likely use quotes especially for things like Gerrit commit message.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 12,
              "reviewer": ids["zxiiro"],
              "message": "Instead of starting with \"This script\" since it is assumed it is better to save space and just get straight to the point. Something like:\n\n Push a change to Gerrit if files modified in repo",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 12,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Latest version is always changing. It\u0027s better to be specific and say what the minimum version that introduced the --reviewers option was so that it\u0027s clear which version you need to install if you\u0027re failing.\n\nLooks like that option was added by this commit:\n\nhttps://github.com/openstack-infra/git-review/commit/d1266ee0a5a14d8c7788337785c097a1201fa5ec\n\nWhich made it into version 1.25.0 as far as I can tell:\n\nhttps://github.com/openstack-infra/git-review/commits/1.25.0",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 15,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "No need to mention CentOS or this line at all.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 17,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["zxiiro"],
              "message": "The reason there are leading / trailing quotes is because we passed it in inside the macro. Can we simplify this by just not passing it in first place?",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["askb"],
              "message": "The projects which consume this builder would be tempted to pass the quotes especially for things like Gerrit commit message. I don\u0027t see a problem in having this as an additional check which filters that out if its there, rather than making an assumption that it wont be passed.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["askb"],
              "message": "Also if don\u0027t quote the gerrit commit message when its multiline, injecting the env variable is incorrectly interpreted.\n\n    builders:\n      - shell: !include-raw-escape: opendaylight-infra-update-image-list.sh\n      - lf-infra-push-gerrit-patch:\n          project: {project}\n          gerrit-user: jenkins-$SILO\n          gerrit-host: git.opendaylight.org\n          gerrit-topic: releng-update-cloud-image-list\n          gerrit-commit-message: |\n              \u0027Update cloud image list docs\n              testing with some extra lines\n              blah blah ... bla\u0027\n          reviewers-email: jluhrsen@redhat.com\n\nex:\n00:29:55 [EnvInject] - Injecting as environment variables the properties content \n00:29:55 blah\u003dblah ... bla\n00:29:55 testing\u003dwith some extra lines\n00:29:55 GERRIT_TOPIC\u003dreleng-update-cloud-image-list\n00:29:55 GERRIT_COMMIT_MESSAGE\u003dUpdate cloud image list docs\n00:29:55 GERRIT_USER\u003djenkins-sandbox\n00:29:55 REVIEWERS_EMAIL\u003djluhrsen@redhat.com\n00:29:55 PROJECT\u003dOrderedDict([(\u0027project\u0027, None)])\n00:29:55 GERRIT_HOST\u003dgit.opendaylight.org\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-update-image-list/15/console",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["zxiiro"],
              "message": "gerrit-commit-message: |\n     \u0027Update cloud image list docs\n     testing with some extra lines\n     blah blah ... bla\u0027\n\nOk I see now. We are using a | character which in YAML means pass this string in as a new line separated string so when the script passes this to the command it breaks the command up to multiple lines.\n\nIt would be better to use the \u003e character for the gerrit-commit-message as in YAML that means this is a space separated string and would enter into the code as a single line.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["zxiiro"],
              "message": "To be clear this does not need to be addressed.",
              "patchSetTimestamp": 1523495406000
            }
          ],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "394b03457d09a8f52260a24b3e3aec5e7f10293c",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/8",
          "uploader": ids["askb"],
          "createdOnDate": 1523578803000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523979403000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523579055000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 11,
              "reviewer": ids["agrimberg"],
              "message": "Extra space here",
              "patchSetTimestamp": 1523578803000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 11,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523578803000
            }
          ],
          "sizeInsertions": 90,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "39c727c80b416ccd01981f601d0b4a48f478af67",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/9",
          "uploader": ids["askb"],
          "createdOnDate": 1524001651000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524239413000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524002288000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524188959000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524002111000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 40,
              "reviewer": ids["zxiiro"],
              "message": "Pin to pip\u003d\u003d9.0.3\n\npip 10 broke many of our scripts so we should be only pulling it in if we can confirm it actually works. Regardless we should be pinning pip versions from now on so that upstream new releases don\u0027t break us.",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 40,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "Do we need to disable this? According to https://github.com/koalaman/shellcheck/wiki/SC1083 it\u0027s about curly braces which I don\u0027t see being used here at all.",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 54,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 60,
              "reviewer": ids["zxiiro"],
              "message": "Our best practices doc says to not escape using double curly braces. Instead use !include-raw-escape.\n\nhttp://global-jjb.releng.linuxfoundation.org/en/latest/best-practices.html#passing-parameters-to-shell-scripts",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 60,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["zxiiro"],
              "message": "Do we need to disable this? According to https://github.com/koalaman/shellcheck/wiki/SC1083 it\u0027s about curly braces which I don\u0027t see being used here at all.",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            }
          ],
          "sizeInsertions": 90,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "cfc34325599e8540be6de457b5f07ac9e08196b4",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/10",
          "uploader": ids["askb"],
          "createdOnDate": 1524272923000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1524523257000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1524523258000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524506176000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524273142000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 88,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I9bc146170e150097b3b9a30ec0456173bba9b1ef",
      "commitNumber": 9496,
      "subject": "Quit build if submodule not found",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9496",
      "commitMessage": "Quit build if submodule not found\n\nIn the monolithic docs build we only care to build if the\nproject is really a submodule of the monolithic docs build.\nIf not then skip the build as the project should be providing\ntheir own docs verify job.\n\nIssue: RELENG-845\nChange-Id: I9bc146170e150097b3b9a30ec0456173bba9b1ef\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1521487908000,
      "lastUpdatedDate": 1521489302000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1521487908000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521487925000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1521488059000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/295/"
        },
        {
          "timestamp": 1521488275000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/295/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/295"
        },
        {
          "timestamp": 1521489298000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1521489302000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4d3e0b4e7bd54c19e1ebdbe4d79e8861ad158c70",
          "parents": [
            "aa205517366205dd017d0801bd0cfe104e742c1a"
          ],
          "ref": "refs/changes/96/9496/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1521487908000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521489298000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521489302000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1521488275000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 8,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I85de941ad64d64597f69c1c924295b26e1dc1bec",
      "commitNumber": 9057,
      "subject": "GIT_URL variable corruption in script",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9057",
      "commitMessage": "GIT_URL variable corruption in script\n\nNot sure why but GIT_URL seems to get corrupt inside of this\nscript. Use GERRIT_URL instead to clone patches.\n\nAdditionally also ignore a patch if a patch that matches the\nGerrit that triggered it is passed in.\n\nIssue: RELENG-784\nChange-Id: I85de941ad64d64597f69c1c924295b26e1dc1bec\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1519709514000,
      "lastUpdatedDate": 1519750837000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1519709514000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1519709742000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/253/"
        },
        {
          "timestamp": 1519709886000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/253/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/253"
        },
        {
          "timestamp": 1519742489000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)\n\nThis breaks the usage of any mirror that we might have in place in preference of going directly back to the source Gerrit which may add considerable time if it is being extra slow!"
        },
        {
          "timestamp": 1519746892000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1519747040000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/254/"
        },
        {
          "timestamp": 1519747289000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/254/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/254"
        },
        {
          "timestamp": 1519747645000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1519747780000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1519750836000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2\n\n(1 comment)"
        },
        {
          "timestamp": 1519750837000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e03f102261acc78e74107e7b73c1009cfe01ea81",
          "parents": [
            "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
          ],
          "ref": "refs/changes/57/9057/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519709514000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1519742489000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1519709886000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-fetch-dependencies.sh",
              "line": 50,
              "reviewer": ids["agrimberg"],
              "message": "Changing this from GIT_URL to GERRIT_URL means that you won\u0027t be using any git mirror when fetching these extra projects.",
              "patchSetTimestamp": 1519709514000
            }
          ],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "022a0b99601fef4a8bd271b79af64e539e5f62dc",
          "parents": [
            "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
          ],
          "ref": "refs/changes/57/9057/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519746892000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1519750836000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1519750837000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1519747780000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1519747289000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 84,
              "reviewer": ids["agrimberg"],
              "message": "Doesn\u0027t this mean that we potentially have a lot of other broken things? I know that env inject is used in numerous places!",
              "patchSetTimestamp": 1519746892000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 84,
              "reviewer": ids["zxiiro"],
              "message": "Yes, potentially. We\u0027ll have to deal with them as they come up. Seems to affect certain variable names over others, at least GERRIT_URL is not getting overwritten.",
              "patchSetTimestamp": 1519746892000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 84,
              "reviewer": ids["agrimberg"],
              "message": "Ok, just as long as we\u0027re aware of it.",
              "patchSetTimestamp": 1519746892000
            }
          ],
          "sizeInsertions": 10,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ic321d6be56ef518a2056099cb5690ea6880c16c2",
      "commitNumber": 8681,
      "subject": "Add : to jjb-deploy:",
      "owner": ids["jluhrsen"],
      "url": "https://gerrit.linuxfoundation.org/infra/8681",
      "commitMessage": "Add : to jjb-deploy:\n\nThis is more intuitive to me, as the keyword takes an\nargument. I realized this when I used the ODL keyword\ncopy-logs:\n\nChange-Id: Ic321d6be56ef518a2056099cb5690ea6880c16c2\nSigned-off-by: Jamo Luhrsen \u003cjluhrsen@redhat.com\u003e\n",
      "createdOnDate": 1517887791000,
      "lastUpdatedDate": 1517948048000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1517887791000,
          "reviewer": ids["jluhrsen"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1517887963000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/232/"
        },
        {
          "timestamp": 1517888246000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/232/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/232/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/232"
        },
        {
          "timestamp": 1517889380000,
          "reviewer": ids["jluhrsen"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1517889450000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1517889569000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/233/"
        },
        {
          "timestamp": 1517889938000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/233"
        },
        {
          "timestamp": 1517890929000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1517945460000,
          "reviewer": ids["jluhrsen"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1517945518000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1517945703000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/236/"
        },
        {
          "timestamp": 1517945873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/236/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/236"
        },
        {
          "timestamp": 1517948042000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1517948048000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "ba7391eb1a49fc549fedbd7134b09243ae7f00fd",
          "parents": [
            "f52936163e512a126befed7c091bcba94f9fc768"
          ],
          "ref": "refs/changes/81/8681/1",
          "uploader": ids["jluhrsen"],
          "createdOnDate": 1517887791000,
          "author": ids["jluhrsen"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1517888246000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "3b5ffa1001538efe8616509c8978f763c53c1129",
          "parents": [
            "f52936163e512a126befed7c091bcba94f9fc768"
          ],
          "ref": "refs/changes/81/8681/2",
          "uploader": ids["jluhrsen"],
          "createdOnDate": 1517889380000,
          "author": ids["jluhrsen"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517889938000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 267,
              "reviewer": ids["jluhrsen"],
              "message": "so, it fails to verify if the : is there, so maybe that\u0027s\nwhy it is without. It should verify if we wrap in single\nquotes, but now I wonder if that will break the regexp?",
              "patchSetTimestamp": 1517889380000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 267,
              "reviewer": ids["zxiiro"],
              "message": "This will break for those who got used to without the colon. I would suggest making the colon optional with something like.\n\n jjb-deploy[:]* (?....",
              "patchSetTimestamp": 1517889380000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 267,
              "reviewer": ids["jluhrsen"],
              "message": "ok, this works for me locally with egrep (the [:]* part, but\nI can\u0027t figure out how to locally test that the regexp\npattern that matches a job still works. I\u0027m worried that\nadding single quotes will break it. any idea how I can test?",
              "patchSetTimestamp": 1517889380000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "b804ed77372c30845bdd360f4baa52de98028a30",
          "parents": [
            "8ec975845840601c3b2a1015bf56a25ad9532234"
          ],
          "ref": "refs/changes/81/8681/3",
          "uploader": ids["jluhrsen"],
          "createdOnDate": 1517945460000,
          "author": ids["jluhrsen"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517948042000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517948048000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517945873000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I35a7b9c3b12321a3a7af24ab36397e38ebb01de9",
      "commitNumber": 8675,
      "subject": "Add maven metadata validator tool",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8675",
      "commitMessage": "Add maven metadata validator tool\n\nAdd a tool to validate maven-metadata.xml to catch timestamp issues\nin builds and fail the build if a mismatch is detected.\n\nIssue: RELENG-772\nChange-Id: I35a7b9c3b12321a3a7af24ab36397e38ebb01de9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1517861269000,
      "lastUpdatedDate": 1517871120000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["rovarga"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1517861269000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1517861518000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/229/"
        },
        {
          "timestamp": 1517861677000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1517861698000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/229/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/229/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/229"
        },
        {
          "timestamp": 1517861895000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/230/"
        },
        {
          "timestamp": 1517861935000,
          "reviewer": ids["shague"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1517861998000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1517862347000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nTesting against https://jenkins.opendaylight.org/releng/view/mdsal/job/mdsal-maven-merge-oxygen/ now"
        },
        {
          "timestamp": 1517862530000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/230/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/230"
        },
        {
          "timestamp": 1517864797000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nScript picks up javadoc and sources jars as mismatched if run with -Pq. This is expected since -Pq disables those things.\n\nWe probably should ignore those classifiers in the script."
        },
        {
          "timestamp": 1517870332000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1517870394000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/231/"
        },
        {
          "timestamp": 1517870483000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nTesting against mdsal merge job with the -Pq option configured:\n\nhttps://jenkins.opendaylight.org/releng/view/mdsal/job/mdsal-maven-merge-oxygen/32/"
        },
        {
          "timestamp": 1517870586000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/231/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/231"
        },
        {
          "timestamp": 1517871117000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2\n\nOk mdsal test passes. (Well it passed the success case, I\u0027ve confirmed by other means that the failure case will properly cancel the upload.)"
        },
        {
          "timestamp": 1517871120000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b53cf815a31fe1173cf247577366e5ad28c5e9fb",
          "parents": [
            "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584"
          ],
          "ref": "refs/changes/75/8675/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1517861269000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1517861698000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/common-variables.sh",
              "line": 47,
              "reviewer": ids["shague"],
              "message": "hah, you get lucky... this syntax failed for me when sourced.\n\nno closing paren",
              "patchSetTimestamp": 1517861269000
            },
            {
              "file": "shell/common-variables.sh",
              "line": 47,
              "reviewer": ids["zxiiro"],
              "message": "Thanks for catching that. Fixed.",
              "patchSetTimestamp": 1517861269000
            }
          ],
          "sizeInsertions": 37,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "74850ff764e5a635e7771ee5869cb3330054eabb",
          "parents": [
            "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584"
          ],
          "ref": "refs/changes/75/8675/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1517861677000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1517864797000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1517861935000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517862530000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 37,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "f52936163e512a126befed7c091bcba94f9fc768",
          "parents": [
            "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584"
          ],
          "ref": "refs/changes/75/8675/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1517870332000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517871117000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517871120000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517870586000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 61,
          "sizeDeletions": -1
        }
      ]
    }
  ],
  "reviewRequestors": [
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
        "addedAsReviewerCount": 10,
        "approvalCount": 11,
        "commentCount": 1,
        "approvals": {
          "-1": 1,
          "1": 5,
          "2": 5
        }
      }
    },
    {
      "identity": ids["jluhrsen"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I35a7b9c3b12321a3a7af24ab36397e38ebb01de9",
        "commitNumber": 8675,
        "subject": "Add maven metadata validator tool",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/8675",
        "commitMessage": "Add maven metadata validator tool\n\nAdd a tool to validate maven-metadata.xml to catch timestamp issues\nin builds and fail the build if a mismatch is detected.\n\nIssue: RELENG-772\nChange-Id: I35a7b9c3b12321a3a7af24ab36397e38ebb01de9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1517861269000,
        "lastUpdatedDate": 1517871120000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["rovarga"],
          ids["shague"]
        ],
        "comments": [
          {
            "timestamp": 1517861269000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1517861518000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/229/"
          },
          {
            "timestamp": 1517861677000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1517861698000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/229/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/229/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/229"
          },
          {
            "timestamp": 1517861895000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/230/"
          },
          {
            "timestamp": 1517861935000,
            "reviewer": ids["shague"],
            "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1517861998000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1517862347000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\nTesting against https://jenkins.opendaylight.org/releng/view/mdsal/job/mdsal-maven-merge-oxygen/ now"
          },
          {
            "timestamp": 1517862530000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/230/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/230"
          },
          {
            "timestamp": 1517864797000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\nScript picks up javadoc and sources jars as mismatched if run with -Pq. This is expected since -Pq disables those things.\n\nWe probably should ignore those classifiers in the script."
          },
          {
            "timestamp": 1517870332000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1517870394000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/231/"
          },
          {
            "timestamp": 1517870483000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3:\n\nTesting against mdsal merge job with the -Pq option configured:\n\nhttps://jenkins.opendaylight.org/releng/view/mdsal/job/mdsal-maven-merge-oxygen/32/"
          },
          {
            "timestamp": 1517870586000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/231/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/231"
          },
          {
            "timestamp": 1517871117000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+2\n\nOk mdsal test passes. (Well it passed the success case, I\u0027ve confirmed by other means that the failure case will properly cancel the upload.)"
          },
          {
            "timestamp": 1517871120000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "b53cf815a31fe1173cf247577366e5ad28c5e9fb",
            "parents": [
              "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584"
            ],
            "ref": "refs/changes/75/8675/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1517861269000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1517861698000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/common-variables.sh",
                "line": 47,
                "reviewer": ids["shague"],
                "message": "hah, you get lucky... this syntax failed for me when sourced.\n\nno closing paren",
                "patchSetTimestamp": 1517861269000
              },
              {
                "file": "shell/common-variables.sh",
                "line": 47,
                "reviewer": ids["zxiiro"],
                "message": "Thanks for catching that. Fixed.",
                "patchSetTimestamp": 1517861269000
              }
            ],
            "sizeInsertions": 37,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "74850ff764e5a635e7771ee5869cb3330054eabb",
            "parents": [
              "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584"
            ],
            "ref": "refs/changes/75/8675/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1517861677000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1517864797000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1517861935000,
                "grantedBy": ids["shague"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1517862530000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 37,
            "sizeDeletions": -1
          },
          {
            "number": 3,
            "revision": "f52936163e512a126befed7c091bcba94f9fc768",
            "parents": [
              "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584"
            ],
            "ref": "refs/changes/75/8675/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1517870332000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1517871117000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1517871120000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1517870586000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 61,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/common-variables.sh",
          "line": 47,
          "reviewer": ids["shague"],
          "message": "hah, you get lucky... this syntax failed for me when sourced.\n\nno closing paren",
          "patchSetTimestamp": 1517861269000
        }
      ]
    }
  ],
  "commentsReceived": [],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 2459000,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};