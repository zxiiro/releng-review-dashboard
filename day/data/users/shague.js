userdata['shague'] = {
  "identity": ids["shague"],
  "reviewCountPlus2": 5,
  "reviewCountPlus1": 5,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1536245533000,
  "lastActiveDate": 1536245697000,
  "activeDayCount": 1,
  "commits": [],
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
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 5,
        "approvalCount": 10,
        "commentCount": 0,
        "approvals": {
          "1": 5,
          "2": 5
        }
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {},
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};