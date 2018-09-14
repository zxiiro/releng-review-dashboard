userdata['jwagantall'] = {
  "identity": ids["jwagantall"],
  "reviewCountPlus2": 11,
  "reviewCountPlus1": 10,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1536719950000,
  "lastActiveDate": 1536891950000,
  "activeDayCount": 2,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iccd72e6f1d580037f55bff3199d05d467de17c58",
      "commitNumber": 12598,
      "subject": "Update jobs to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12598",
      "commitMessage": "Update jobs to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build issues caused by `pip install` due to\nvirtualenvs messing with the environment.\n\nChange-Id: Iccd72e6f1d580037f55bff3199d05d467de17c58\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536891275000,
      "lastUpdatedDate": 1536891950000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536891275000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536891487000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/785/"
        },
        {
          "timestamp": 1536891697000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/785/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/785"
        },
        {
          "timestamp": 1536891947000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536891950000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "11bccd3d96d180f93ae96cd330e23565ba351aa5",
          "parents": [
            "a9a25596239cc8b5fd374cf742764fe5a9c2a3d7"
          ],
          "ref": "refs/changes/98/12598/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536891275000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536891947000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536891950000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536891697000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 34,
          "sizeDeletions": -37
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I3aa48d98811a7469fba15fe4c3eb7474bc7b5196",
      "commitNumber": 12592,
      "subject": "Update rtd jobs to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12592",
      "commitMessage": "Update rtd jobs to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build install failing with missing PBR version.\n\nChange-Id: I3aa48d98811a7469fba15fe4c3eb7474bc7b5196\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536884980000,
      "lastUpdatedDate": 1536891208000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jwagantall"]
      ],
      "comments": [
        {
          "timestamp": 1536884980000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536885009000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2"
        },
        {
          "timestamp": 1536885029000,
          "reviewer": ids["zxiiro"],
          "message": "Topic v0.24.x removed"
        },
        {
          "timestamp": 1536885061000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/776/"
        },
        {
          "timestamp": 1536885065000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536885260000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/776/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/776"
        },
        {
          "timestamp": 1536890439000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1536890623000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1536890639000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/782/"
        },
        {
          "timestamp": 1536890787000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536890814000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/782/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/782"
        },
        {
          "timestamp": 1536890948000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/784/"
        },
        {
          "timestamp": 1536891055000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536891117000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/784/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/784"
        },
        {
          "timestamp": 1536891208000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fbf7e8e64c2876ff4c45d58d918782290fe0a4f4",
          "parents": [
            "ac3415e0339d82b1695d0d61534209f46b90375e"
          ],
          "ref": "refs/changes/92/12592/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536884980000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1536885009000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536885260000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -4
        },
        {
          "number": 2,
          "revision": "737792631bd8d52589d1e1bb41e216ed0cfdf634",
          "parents": [
            "0ea259773ff37f8a8fdade2424548a31c0bd6590"
          ],
          "ref": "refs/changes/92/12592/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536890439000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536890623000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536890814000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -4
        },
        {
          "number": 3,
          "revision": "ebfafa6139affe24a2330bd90f59f6adbc033a47",
          "parents": [
            "94549ed1f13fca2ebd7d3545166f1e73035a694d"
          ],
          "ref": "refs/changes/92/12592/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536890787000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536891055000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536891208000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536891117000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ic466cd74a568e0de2fbb0f3fd75205cd04c1e3f9",
      "commitNumber": 12586,
      "subject": "Use --user for tox install instead of virtualenv",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12586",
      "commitMessage": "Use --user for tox install instead of virtualenv\n\nAllows us to remove the workaround of installing lftools in\na venv before as the virtualenvs should no longer be conflicting.\n\nChange-Id: Ic466cd74a568e0de2fbb0f3fd75205cd04c1e3f9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536869897000,
      "lastUpdatedDate": 1536890935000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["jwagantall"]
      ],
      "comments": [
        {
          "timestamp": 1536869897000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536870075000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/761/"
        },
        {
          "timestamp": 1536870223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/761/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/761/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/761"
        },
        {
          "timestamp": 1536874314000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536874507000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/772/"
        },
        {
          "timestamp": 1536874694000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/772/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/772"
        },
        {
          "timestamp": 1536885073000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536890611000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536890727000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/783/"
        },
        {
          "timestamp": 1536890880000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/783/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/783"
        },
        {
          "timestamp": 1536890932000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536890935000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4656473fff92dbf36000a6829ad3717e9dc3cfc9",
          "parents": [
            "b65f75f9185892ce5980ac40a8e4f0e4a332412c"
          ],
          "ref": "refs/changes/86/12586/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536869897000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536870223000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -7
        },
        {
          "number": 2,
          "revision": "9e27a8a8dccf180301863a3121dd7b730723a321",
          "parents": [
            "b65f75f9185892ce5980ac40a8e4f0e4a332412c"
          ],
          "ref": "refs/changes/86/12586/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536874314000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536874694000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 13,
          "sizeDeletions": -17
        },
        {
          "number": 3,
          "revision": "5320005564017416e6ed93a12be2553c2e381840",
          "parents": [
            "0ea259773ff37f8a8fdade2424548a31c0bd6590"
          ],
          "ref": "refs/changes/86/12586/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536890611000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536890932000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536890935000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536890880000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -15
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I69a2e669493b0f309e161f07152d93b0fa0c9ac6",
      "commitNumber": 12590,
      "subject": "Update lftools to ~ 0.17.1",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12590",
      "commitMessage": "Update lftools to ~ 0.17.1\n\nChange-Id: I69a2e669493b0f309e161f07152d93b0fa0c9ac6\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536883392000,
      "lastUpdatedDate": 1536890462000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536883392000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536883477000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/774/"
        },
        {
          "timestamp": 1536883674000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/774/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/774"
        },
        {
          "timestamp": 1536885087000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536890460000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536890462000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f68122d22bc4007d472cd5daff30824e732a91bc",
          "parents": [
            "b65f75f9185892ce5980ac40a8e4f0e4a332412c"
          ],
          "ref": "refs/changes/90/12590/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536883392000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536890460000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536890462000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536883674000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I054d1cc0455c700e00450295cf76d925cff99f73",
      "commitNumber": 12591,
      "subject": "Use `python -m pip` to ensure updated pip is used",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12591",
      "commitMessage": "Use `python -m pip` to ensure updated pip is used\n\n/usr/bin/pip is usually an OS level wrapper for pip. Calling\n`python -m pip` ensures that we are getting the pip we are\ninstalling rather than the OS local version.\n\nChange-Id: I054d1cc0455c700e00450295cf76d925cff99f73\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536883708000,
      "lastUpdatedDate": 1536890309000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536883708000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536883805000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/775/"
        },
        {
          "timestamp": 1536884033000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/775/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/775"
        },
        {
          "timestamp": 1536885052000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536890306000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536890309000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "0ea259773ff37f8a8fdade2424548a31c0bd6590",
          "parents": [
            "b65f75f9185892ce5980ac40a8e4f0e4a332412c"
          ],
          "ref": "refs/changes/91/12591/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536883708000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536890306000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536890309000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536884033000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "I486e436a640192dabe261e901024b42170e416cc",
      "commitNumber": 12597,
      "subject": "Update jenkins-cfg job to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12597",
      "commitMessage": "Update jenkins-cfg job to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build install failing with missing pip\u003d\u003d18.0.\nThis is related to the lftools-venv series of patches.\n\nChange-Id: I486e436a640192dabe261e901024b42170e416cc\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536888918000,
      "lastUpdatedDate": 1536889956000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536888918000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536889102000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/781/"
        },
        {
          "timestamp": 1536889322000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/781/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/781"
        },
        {
          "timestamp": 1536889323000,
          "reviewer": ids["jwagantall"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536889953000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536889956000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fc8ed70c43a44aaa3a68f48222a69041d137c912",
          "parents": [
            "7265d1f18e9895a1d86449c3ee9fa57edd023df9"
          ],
          "ref": "refs/changes/97/12597/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536888918000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536889953000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536889956000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536889322000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -9
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "I3c0320ada2e6ede3ce6b680ee26aa2a0b74e5e6d",
      "commitNumber": 12596,
      "subject": "Update tox-sonar job to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12596",
      "commitMessage": "Update tox-sonar job to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build install failing with missing pip\u003d\u003d18.0.\nThis is related to the lftools-venv series of patches.\n\nChange-Id: I3c0320ada2e6ede3ce6b680ee26aa2a0b74e5e6d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536888918000,
      "lastUpdatedDate": 1536889317000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536888918000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536889048000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/780/"
        },
        {
          "timestamp": 1536889224000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/780/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/780"
        },
        {
          "timestamp": 1536889308000,
          "reviewer": ids["jwagantall"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536889314000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536889317000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7265d1f18e9895a1d86449c3ee9fa57edd023df9",
          "parents": [
            "d9efeb67eeb7d11e93d4152c07ae7276639f4c7c"
          ],
          "ref": "refs/changes/96/12596/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536888918000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536889314000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536889317000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536889224000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "Ida0b27957460871d7dce4e78df3297bb1a72b7ca",
      "commitNumber": 12595,
      "subject": "Update all maven jobs to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12595",
      "commitMessage": "Update all maven jobs to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build install failing with missing pip\u003d\u003d18.0.\nThis is related to the lftools-venv series of patches.\n\nChange-Id: Ida0b27957460871d7dce4e78df3297bb1a72b7ca\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536887379000,
      "lastUpdatedDate": 1536888437000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536887379000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536887502000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/779/"
        },
        {
          "timestamp": 1536887652000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/779/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/779"
        },
        {
          "timestamp": 1536888114000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536888434000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536888437000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "d9efeb67eeb7d11e93d4152c07ae7276639f4c7c",
          "parents": [
            "fa92cd4118bf1ec02ec93327fcfda2325b7c9106"
          ],
          "ref": "refs/changes/95/12595/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536887379000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536888434000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536888437000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536887652000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 17,
          "sizeDeletions": -13
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "Iade69e1de3bc585c88d1c4fe60a7081c9d6319aa",
      "commitNumber": 12594,
      "subject": "Update jjb jobs to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12594",
      "commitMessage": "Update jjb jobs to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build install failing to pull in pip\u003d\u003d18.0.\nThis is related to the lftools-venv series of patches.\n\nChange-Id: Iade69e1de3bc585c88d1c4fe60a7081c9d6319aa\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536887379000,
      "lastUpdatedDate": 1536888206000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536887379000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536887465000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/778/"
        },
        {
          "timestamp": 1536887662000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/778/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/778"
        },
        {
          "timestamp": 1536888108000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536888204000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536888206000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fa92cd4118bf1ec02ec93327fcfda2325b7c9106",
          "parents": [
            "5957fbdd1eb1c38af3cf59fffedf8ebe1060d196"
          ],
          "ref": "refs/changes/94/12594/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536887379000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536888204000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536888206000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536887662000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "I3aa48d98811a7469fba15fe4c3eb7474bc7b5196",
      "commitNumber": 12593,
      "subject": "Update rtd jobs to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12593",
      "commitMessage": "Update rtd jobs to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build install failing with missing PBR version.\nThis is related to the lftools-venv series of patches.\n\nChange-Id: I3aa48d98811a7469fba15fe4c3eb7474bc7b5196\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536885156000,
      "lastUpdatedDate": 1536886192000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536885156000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536885183000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        },
        {
          "timestamp": 1536885805000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/777/"
        },
        {
          "timestamp": 1536886008000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/777/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/777"
        },
        {
          "timestamp": 1536886189000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536886192000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5957fbdd1eb1c38af3cf59fffedf8ebe1060d196",
          "parents": [
            "ac3415e0339d82b1695d0d61534209f46b90375e"
          ],
          "ref": "refs/changes/93/12593/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536885156000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536886189000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536886192000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536886008000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Idf23a30b111dd922120fb6195d0411e2fc993dab",
      "commitNumber": 12550,
      "subject": "Use clouds.yaml for openstack packer builders",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12550",
      "commitMessage": "Use clouds.yaml for openstack packer builders\n\nSince packer version 1.2.5, packer now supports pulling openstack\nconfig from clouds.yaml. Let\u0027s consolidate to that file so that we\ndon\u0027t have duplicate configuration with the jobs that need the\nopenstack cli.\n\nIssue: RELENG-1205\nChange-Id: Idf23a30b111dd922120fb6195d0411e2fc993dab\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536710958000,
      "lastUpdatedDate": 1536854184000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["jwagantall"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1536710958000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536713179000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536713269000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/320/ (1/2)"
        },
        {
          "timestamp": 1536713332000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/752/ (2/2)"
        },
        {
          "timestamp": 1536713475000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/320/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/320\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/752/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/752"
        },
        {
          "timestamp": 1536714378000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)\n\nReno some release notes please."
        },
        {
          "timestamp": 1536714823000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536714922000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/321/ (1/2)"
        },
        {
          "timestamp": 1536714980000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/753/ (2/2)"
        },
        {
          "timestamp": 1536715144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/321/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/321\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/753/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/753"
        },
        {
          "timestamp": 1536719950000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536719977000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3:\n\nLeaving it un merged since I would rather prefer a 2nd look from someone else."
        },
        {
          "timestamp": 1536763427000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1536763606000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1536763702000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536763814000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/322/ (1/2)"
        },
        {
          "timestamp": 1536763873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/754/ (2/2)"
        },
        {
          "timestamp": 1536764055000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/322/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/322\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/754/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/754"
        },
        {
          "timestamp": 1536764268000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536854160000,
          "reviewer": ids["askb"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536854184000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fa4b19658c52cc94ac45830a40f6db4ea0673cf3",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536710958000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 87,
              "reviewer": ids["zxiiro"],
              "message": "Downside this is we now require clouds-yaml even for non-openstack packer users.\n\nI wonder if we can somehow make this optional.",
              "patchSetTimestamp": 1536710958000
            }
          ],
          "sizeInsertions": 11,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d67d30eab6b845113244bd0be9ac85ce4efda8b3",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536713179000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536714378000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536713475000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "99edf245eb8f3b25633c3840eecbaa7f3b61e213",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536714823000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536763427000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536719950000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536715144000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 98,
              "reviewer": ids["agrimberg"],
              "message": "Maybe I\u0027m just being silly, but do we know that setting OS_CLOUD to something, when not building an openstack packer (that is openstack \u003d false) isn\u0027t going to cause packer to still try to look in the clouds file?\n\nPerhaps this specific inject should be moved into the conditional-step",
              "patchSetTimestamp": 1536714823000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 98,
              "reviewer": ids["zxiiro"],
              "message": "We can do that just to be safe and not over expose variables.",
              "patchSetTimestamp": 1536714823000
            }
          ],
          "sizeInsertions": 53,
          "sizeDeletions": -1
        },
        {
          "number": 4,
          "revision": "d8e3dc493b1ba8b5a462887c6fa90a51c86bedc2",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536763702000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536764268000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536854160000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536854184000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536764055000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 54,
          "sizeDeletions": -1
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 11,
        "approvalCount": 21,
        "commentCount": 0,
        "approvals": {
          "1": 10,
          "2": 11
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