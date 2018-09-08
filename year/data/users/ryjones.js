userdata['ryjones'] = {
  "identity": ids["ryjones"],
  "reviewCountPlus2": 2,
  "reviewCountPlus1": 3,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1507770788000,
  "lastActiveDate": 1523392974000,
  "activeDayCount": 5,
  "commits": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I6889507870f66e6b44720579f8be7b0b35b7c7a9",
      "commitNumber": 6813,
      "subject": "Update setuptools version",
      "owner": ids["ryjones"],
      "url": "https://gerrit.linuxfoundation.org/infra/6813",
      "commitMessage": "Update setuptools version\n\nHyperledger builds fail on the Z platform with versions\nof setuptools \u003c 30.\n\nFAB-6595\n\nChange-Id: I6889507870f66e6b44720579f8be7b0b35b7c7a9\nSigned-off-by: Ry Jones \u003crjones@linuxfoundation.org\u003e\n",
      "createdOnDate": 1507770788000,
      "lastUpdatedDate": 1507851838000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["jwagantall"],
        ids["ryjones"]
      ],
      "comments": [
        {
          "timestamp": 1507770788000,
          "reviewer": ids["ryjones"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1507770839000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/278/"
        },
        {
          "timestamp": 1507771128000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/278/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/278/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/278"
        },
        {
          "timestamp": 1507774479000,
          "reviewer": ids["ryjones"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1507774531000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/279/"
        },
        {
          "timestamp": 1507774615000,
          "reviewer": ids["ryjones"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1507774629000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/279/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/279/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/279"
        },
        {
          "timestamp": 1507774659000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/280/"
        },
        {
          "timestamp": 1507774692000,
          "reviewer": ids["ryjones"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1507774699000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/281/"
        },
        {
          "timestamp": 1507774739000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/280/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/280/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/280"
        },
        {
          "timestamp": 1507774995000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/281/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/281/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/281"
        },
        {
          "timestamp": 1507850874000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nNot sure why but this passes for me locally (Although I\u0027m using Python 3 and not 2). I\u0027ll investigate the build server to get this passing."
        },
        {
          "timestamp": 1507850888000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nrecheck"
        },
        {
          "timestamp": 1507850920000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/282/"
        },
        {
          "timestamp": 1507850927000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 4:\n\n\u003e Not sure why but this passes for me locally (Although I\u0027m using\n \u003e Python 3 and not 2). I\u0027ll investigate the build server to get this\n \u003e passing.\n\nthank you"
        },
        {
          "timestamp": 1507851250000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/282/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/282"
        },
        {
          "timestamp": 1507851835000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1507851838000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "77a224f6692744605e85960edcd1bbd2a011315e",
          "parents": [
            "54f8abc5937dc52acb8e8c5669e29ad9ae66ea23"
          ],
          "ref": "refs/changes/13/6813/1",
          "uploader": ids["ryjones"],
          "createdOnDate": 1507770788000,
          "author": ids["ryjones"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1507771128000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "f7c3c8bb02e9744c9a4f7fe947af2d75cc88cf1a",
          "parents": [
            "54f8abc5937dc52acb8e8c5669e29ad9ae66ea23"
          ],
          "ref": "refs/changes/13/6813/2",
          "uploader": ids["ryjones"],
          "createdOnDate": 1507774479000,
          "author": ids["ryjones"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1507774629000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "39eb5c89a728db20144f9cd56c848fa9596457b2",
          "parents": [
            "54f8abc5937dc52acb8e8c5669e29ad9ae66ea23"
          ],
          "ref": "refs/changes/13/6813/3",
          "uploader": ids["ryjones"],
          "createdOnDate": 1507774615000,
          "author": ids["ryjones"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1507774739000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 4,
          "revision": "9a42505848cecfbd31ba7e08a9a9a0bc32859d78",
          "parents": [
            "54f8abc5937dc52acb8e8c5669e29ad9ae66ea23"
          ],
          "ref": "refs/changes/13/6813/4",
          "uploader": ids["ryjones"],
          "createdOnDate": 1507774692000,
          "author": ids["ryjones"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1507851835000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1507851838000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1507851250000,
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
      "id": "I755a2521f28fc6441a69dd0ed93c0f85502b787b",
      "commitNumber": 9751,
      "subject": "Fix pip version",
      "owner": ids["ryjones"],
      "url": "https://gerrit.linuxfoundation.org/infra/9751",
      "commitMessage": "Fix pip version\n\npip has released a beta version which breaks pipdeptree.\n\nRELENG-868\nChange-Id: I755a2521f28fc6441a69dd0ed93c0f85502b787b\nSigned-off-by: Ry Jones \u003cry@walledcity.org\u003e\n",
      "createdOnDate": 1522942579000,
      "lastUpdatedDate": 1522943234000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["ryjones"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1522942579000,
          "reviewer": ids["ryjones"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1522942634000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1522942682000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 1:\n\nI\u0027ve tested this fix on HYP jenkins."
        },
        {
          "timestamp": 1522942690000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1522942734000,
          "reviewer": ids["ryjones"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1522942745000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1522942794000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/317/"
        },
        {
          "timestamp": 1522942968000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/317/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/317"
        },
        {
          "timestamp": 1522943209000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1522943234000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "471515e54d368e5ba6a9c592dd00f6b88d9c0286",
          "parents": [
            "edf56a1e9ce91d936388621ecfc850162aabfebd"
          ],
          "ref": "refs/changes/51/9751/1",
          "uploader": ids["ryjones"],
          "createdOnDate": 1522942579000,
          "author": ids["ryjones"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1522942634000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "This should be 1 line lower so that it is together with the footer information.",
              "patchSetTimestamp": 1522942579000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 11,
              "reviewer": ids["ryjones"],
              "message": "Done",
              "patchSetTimestamp": 1522942579000
            }
          ],
          "sizeInsertions": 4,
          "sizeDeletions": -4
        },
        {
          "number": 2,
          "revision": "ad0ee7c792b24345f2b419b3418bd84eac0f6ac1",
          "parents": [
            "edf56a1e9ce91d936388621ecfc850162aabfebd"
          ],
          "ref": "refs/changes/51/9751/2",
          "uploader": ids["ryjones"],
          "createdOnDate": 1522942734000,
          "author": ids["ryjones"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1522943209000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1522943234000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522942968000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -4
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia06166362526cf00754b4a21e6b977d57fe91db6",
      "commitNumber": 9891,
      "subject": "Force rm for cleanup macro",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9891",
      "commitMessage": "Force rm for cleanup macro\n\nUsing -f (force) rm will return a 0 status and not print a\nmessage if a file is not found.\n\nIssue: RELENG-880\nChange-Id: Ia06166362526cf00754b4a21e6b977d57fe91db6\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1523392152000,
      "lastUpdatedDate": 1523392974000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["ryjones"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1523392152000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1523392185000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1523392534000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 3: Patch Set 2 was rebased"
        },
        {
          "timestamp": 1523392694000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/324/"
        },
        {
          "timestamp": 1523392953000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/324/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/324"
        },
        {
          "timestamp": 1523392973000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1523392974000,
          "reviewer": ids["ryjones"],
          "message": "Change has been successfully merged by Ry Jones"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4e25d09ee4f5ed0e40ba00ed7e8421e431c6492c",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/91/9891/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523392152000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "8fc4423f20d2640be69980027e7ab13bcfdc0eb4",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/91/9891/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523392185000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        },
        {
          "number": 3,
          "revision": "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247",
          "parents": [
            "f1fe4733f880676b8f2e8060ddc7dc03ecaae010"
          ],
          "ref": "refs/changes/91/9891/3",
          "uploader": ids["ryjones"],
          "createdOnDate": 1523392534000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1523392973000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1523392974000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523392953000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iaa5df87921d7d7333ecb87bc11c707884e4fb277",
      "commitNumber": 9890,
      "subject": "Fix pipconf name to the default one",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9890",
      "commitMessage": "Fix pipconf name to the default one\n\nIn Managed Files we do not give the filename a dot so remove\nit to match what we really look for.\n\nChange-Id: Iaa5df87921d7d7333ecb87bc11c707884e4fb277\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1523391864000,
      "lastUpdatedDate": 1523392442000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["ryjones"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1523391864000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1523391988000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/111/ (1/2)"
        },
        {
          "timestamp": 1523392023000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/323/ (2/2)"
        },
        {
          "timestamp": 1523392210000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/111/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/111\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/323/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/323"
        },
        {
          "timestamp": 1523392437000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1523392442000,
          "reviewer": ids["ryjones"],
          "message": "Change has been successfully merged by Ry Jones"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f1fe4733f880676b8f2e8060ddc7dc03ecaae010",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/90/9890/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523391864000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1523392437000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1523392442000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523392210000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I04020587acfb8b6550c0221ebfb97a501f46b15a",
      "commitNumber": 9387,
      "subject": "Support PostBuildScript 2.x",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9387",
      "commitMessage": "Support PostBuildScript 2.x\n\nThis is a breaking change that requires consumers of global-jjb\nto switch to JJB 2.0.3 and install PostBuildScript 2.x in Jenkins.\n\nIt updates lf-infra-publish macro to switch to the PostBuildScript 2.x\nYAML definitions.\n\nIssue: RELENG-832\nChange-Id: I04020587acfb8b6550c0221ebfb97a501f46b15a\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1520819425000,
      "lastUpdatedDate": 1521481066000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["ryjones"],
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1520819425000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1520819460000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nTargetting this for global-jjb v0.18.0 so blocking this change until v0.17.0 is released first."
        },
        {
          "timestamp": 1520819910000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/"
        },
        {
          "timestamp": 1520820094000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/284"
        },
        {
          "timestamp": 1520867783000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1520867810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: -Code-Review"
        },
        {
          "timestamp": 1520867842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/"
        },
        {
          "timestamp": 1520868025000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/286"
        },
        {
          "timestamp": 1520868067000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nThis is gonna fail until we bump the tox verify job to JJB 2.0.3."
        },
        {
          "timestamp": 1520868148000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1520868180000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1520868320000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1520868330000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/288/"
        },
        {
          "timestamp": 1520868572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/288/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/288"
        },
        {
          "timestamp": 1520868953000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+1\n\nI believe this is accurate, but I\u0027ll let another set of eyes say yes for now."
        },
        {
          "timestamp": 1520870230000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1520894565000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nI am CI"
        },
        {
          "timestamp": 1520895198000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1520895333000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/289/"
        },
        {
          "timestamp": 1520895491000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/289/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/289"
        },
        {
          "timestamp": 1521481065000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1521481066000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b99e1e669c933d8721ee6b4dc89ad9f849b56323",
          "parents": [
            "de2a34225d44551c358afe05403f4cb3006f50e6"
          ],
          "ref": "refs/changes/87/9387/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520819425000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1520819460000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520820094000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "ffcafd7f457786329546f0067663fab665aa3ebd",
          "parents": [
            "e384cae5689bc7e94628bac67cd7099aa2235710"
          ],
          "ref": "refs/changes/87/9387/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520867783000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520868025000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 395,
              "reviewer": ids["agrimberg"],
              "message": "This is a deviation from what we\u0027ve been doing previously. So, we\u0027re going to mark as UNSTABLE now instead of FAILED if the postbuildscript fails?",
              "patchSetTimestamp": 1520867783000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 395,
              "reviewer": ids["zxiiro"],
              "message": "Yes, unfortunately we have to because the new PostBuildScript plugin will fail the entire build we don\u0027t set this option. Which is worse. Previously it just ignored and did affect the build result.\n\nOn the other hand marking unstable might be a good idea to let us know something is wrong and we have to investigate. These scripts should be coded in away that allows it to pass in all of our use cases.",
              "patchSetTimestamp": 1520867783000
            }
          ],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "f76c82abd9ad7f86b1fdcc0b77a78edf2e87c2c5",
          "parents": [
            "e384cae5689bc7e94628bac67cd7099aa2235710"
          ],
          "ref": "refs/changes/87/9387/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520868180000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521481065000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521481066000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1520870230000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520895491000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 12,
          "sizeDeletions": -6
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 5,
        "commentCount": 0,
        "approvals": {
          "1": 3,
          "2": 2
        }
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I755a2521f28fc6441a69dd0ed93c0f85502b787b",
        "commitNumber": 9751,
        "subject": "Fix pip version",
        "owner": ids["ryjones"],
        "url": "https://gerrit.linuxfoundation.org/infra/9751",
        "commitMessage": "Fix pip version\n\npip has released a beta version which breaks pipdeptree.\n\nRELENG-868\nChange-Id: I755a2521f28fc6441a69dd0ed93c0f85502b787b\nSigned-off-by: Ry Jones \u003cry@walledcity.org\u003e\n",
        "createdOnDate": 1522942579000,
        "lastUpdatedDate": 1522943234000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["ryjones"],
          ids["zxiiro"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1522942579000,
            "reviewer": ids["ryjones"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1522942634000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1522942682000,
            "reviewer": ids["ryjones"],
            "message": "Patch Set 1:\n\nI\u0027ve tested this fix on HYP jenkins."
          },
          {
            "timestamp": 1522942690000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1522942734000,
            "reviewer": ids["ryjones"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1522942745000,
            "reviewer": ids["ryjones"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1522942794000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/317/"
          },
          {
            "timestamp": 1522942968000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/317/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/317"
          },
          {
            "timestamp": 1522943209000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1522943234000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "471515e54d368e5ba6a9c592dd00f6b88d9c0286",
            "parents": [
              "edf56a1e9ce91d936388621ecfc850162aabfebd"
            ],
            "ref": "refs/changes/51/9751/1",
            "uploader": ids["ryjones"],
            "createdOnDate": 1522942579000,
            "author": ids["ryjones"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1522942634000,
                "grantedBy": ids["zxiiro"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 11,
                "reviewer": ids["zxiiro"],
                "message": "This should be 1 line lower so that it is together with the footer information.",
                "patchSetTimestamp": 1522942579000
              },
              {
                "file": "/COMMIT_MSG",
                "line": 11,
                "reviewer": ids["ryjones"],
                "message": "Done",
                "patchSetTimestamp": 1522942579000
              }
            ],
            "sizeInsertions": 4,
            "sizeDeletions": -4
          },
          {
            "number": 2,
            "revision": "ad0ee7c792b24345f2b419b3418bd84eac0f6ac1",
            "parents": [
              "edf56a1e9ce91d936388621ecfc850162aabfebd"
            ],
            "ref": "refs/changes/51/9751/2",
            "uploader": ids["ryjones"],
            "createdOnDate": 1522942734000,
            "author": ids["ryjones"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1522943209000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1522943234000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1522942968000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 4,
            "sizeDeletions": -4
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "/COMMIT_MSG",
          "line": 11,
          "reviewer": ids["zxiiro"],
          "message": "This should be 1 line lower so that it is together with the footer information.",
          "patchSetTimestamp": 1522942579000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 3,
        "commentCount": 1,
        "approvals": {
          "2": 3
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
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/lftools": {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [],
      "commitCountForUser": 1
    },
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 40852500,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [],
      "commitCountForUser": 1
    },
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};