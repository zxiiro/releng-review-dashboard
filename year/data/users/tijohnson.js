userdata['tijohnson'] = {
  "identity": ids["tijohnson"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 9223372036854775807,
  "lastActiveDate": 0,
  "activeDayCount": 0,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I58b576cdcea370f4ae1386529b90130140d6840e",
      "commitNumber": 11624,
      "subject": "Add options to continue interrupted downloads",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/11624",
      "commitMessage": "Add options to continue interrupted downloads\n\nAdd support to continue interrupted downloads with\n`lftools sign deploy-nexus`. This allows to continue partially\ndownloaded files and when used with user specified path (-d).\n\nRELENG-929\nChange-Id: I58b576cdcea370f4ae1386529b90130140d6840e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1530350156000,
      "lastUpdatedDate": 1531780365000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["askb"],
        ids["agrimberg"],
        ids["agardner"],
        ids["bramwelt"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1530350156000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1530350334000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/136/"
        },
        {
          "timestamp": 1530350530000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/136/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/136"
        },
        {
          "timestamp": 1530366478000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1530366878000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1530495833000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1530495931000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n(2 comments)"
        },
        {
          "timestamp": 1530495994000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/137/"
        },
        {
          "timestamp": 1530496208000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/137/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/137"
        },
        {
          "timestamp": 1530503242000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1530525735000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1530525742000,
          "reviewer": ids["askb"],
          "message": "Abandoned"
        },
        {
          "timestamp": 1531153473000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1531398688000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n\u003e (1 comment)\n\nwget supports mirroring sites but does not do a file integrity check after downloading each file. However, this has to manually implemented. \n\nI realized that you can used the --continue option, which checks the file size and re-downloads the partially downloaded file. I have used this option to download large iso files, verified the md5sum."
        },
        {
          "timestamp": 1531437203000,
          "reviewer": ids["askb"],
          "message": "Restored"
        },
        {
          "timestamp": 1531437215000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Patch Set 2 was rebased"
        },
        {
          "timestamp": 1531437235000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1531437437000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/164/"
        },
        {
          "timestamp": 1531437640000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/164/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/164"
        },
        {
          "timestamp": 1531779338000,
          "reviewer": ids["askb"],
          "message": "Patch Set 4:\n\nAnyone -1/+1 this please. I have tested this to work."
        },
        {
          "timestamp": 1531779996000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1531779997000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1531780365000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "d2dba974b0414b4d509ce5bb967807044f7a71dd",
          "parents": [
            "d4148d445256165ff1c5927c123ed749fae44206"
          ],
          "ref": "refs/changes/24/11624/1",
          "uploader": ids["askb"],
          "createdOnDate": 1530350156000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1530366478000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530350530000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["zxiiro"],
              "message": "If it requires this patch than rebase ontop of it so that they cannot be merged independently of each other.",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["zxiiro"],
              "message": "I think shouldn\u0027t set infinity because symlinks can cause an infinite loop.",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["zxiiro"],
              "message": "I also think we shouldn\u0027t be sneaking in unrelated changes in a patch either and should be a separate discussion.",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1530350156000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "ebf9954b756624a9c7b84a2f204cac65aa32abaf",
          "parents": [
            "06cb412934f99cac0e17e7820a44a743265869e6"
          ],
          "ref": "refs/changes/24/11624/2",
          "uploader": ids["askb"],
          "createdOnDate": 1530495833000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1530503242000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530496208000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/sign",
              "line": 152,
              "reviewer": ids["zxiiro"],
              "message": "What guarantees / protection do we have against corrupt file or files that were half downloaded the previous time say if lftools crashed in a previous run?\n\nOr what if a file with the same name already exists but is not byte equivalent?\n\nIf we upload a signature signed against a corrupt file it won\u0027t validate when pushed back up to Nexus.",
              "patchSetTimestamp": 1530495833000
            },
            {
              "file": "shell/sign",
              "line": 152,
              "reviewer": ids["askb"],
              "message": "None, with wget there are no guards to verify the checksum of every downloaded file. I tried using the -c (continue) option which does not work.\n\nAlso you are right, if the download file is interrupted and continued again from the same path, this just skips to the file. If we need to implement this manually downloading an individual file and verifying the checksum, with retries on failures. Let me know if you know of an option to overcome this.",
              "patchSetTimestamp": 1530495833000
            },
            {
              "file": "shell/sign",
              "line": 152,
              "reviewer": ids["zxiiro"],
              "message": "I think wget is sometimes used to mirror websites. How are those systems mirroring and ensuring file integrity of their mirrors?",
              "patchSetTimestamp": 1530495833000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "3cebff5369c62f3379911dfa5e7a1d4fee20e021",
          "parents": [
            "7a9f2a811bd995755631753a574317b09442eaeb"
          ],
          "ref": "refs/changes/24/11624/3",
          "uploader": ids["askb"],
          "createdOnDate": 1531437215000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "7ecbff3261adcdc2d1cc80015d2628e63f6a5b2f",
          "parents": [
            "7a9f2a811bd995755631753a574317b09442eaeb"
          ],
          "ref": "refs/changes/24/11624/4",
          "uploader": ids["askb"],
          "createdOnDate": 1531437235000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531779996000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1531779997000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531780365000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531437640000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I30a00f1c92f7714f7ac8a308d12a6181fe4547cd",
      "commitNumber": 12326,
      "subject": "Require IMAGE_NAME and HARDWARE_ID",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12326",
      "commitMessage": "Require IMAGE_NAME and HARDWARE_ID\n\nIMAGE_NAME had HARDWARE_ID are required settings so clearly mark\nthem as so instead of mentioning the default setting.\n\nChange-Id: I30a00f1c92f7714f7ac8a308d12a6181fe4547cd\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534778665000,
      "lastUpdatedDate": 1534784449000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1534778665000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534778691000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778797000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/307/ (1/2)"
        },
        {
          "timestamp": 1534778846000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/726/ (2/2)"
        },
        {
          "timestamp": 1534778995000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/307/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/307\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/726/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/726"
        },
        {
          "timestamp": 1534784447000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534784449000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "40baa00e9dfc838fd7f8b47b5906158a7c6f4d85",
          "parents": [
            "05d39da965b282ab4d950fe519834ad31996286a"
          ],
          "ref": "refs/changes/26/12326/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534778665000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534784447000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534784449000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534778691000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534778995000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iffebd2b7e6b282d3e17a7bd6de1452e063f64603",
      "commitNumber": 11786,
      "subject": "Set Packer Image name as Build Description",
      "owner": ids["bramwelt"],
      "url": "https://gerrit.linuxfoundation.org/infra/11786",
      "commitMessage": "Set Packer Image name as Build Description\n\nWith the Build Description Setter plugin installed in Jenkins, the\npacker image name can be extracted after a successful build.\n\nThis allows users to no longer look through the build logs when trying\nto find the image name for builds.\n\nIssue: RELENG-1073\n\nChange-Id: Iffebd2b7e6b282d3e17a7bd6de1452e063f64603\nSigned-off-by: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
      "createdOnDate": 1531523458000,
      "lastUpdatedDate": 1531754529000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["valderrv"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["bramwelttest"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1531523458000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1531523639000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/644/"
        },
        {
          "timestamp": 1531523807000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/644/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/644"
        },
        {
          "timestamp": 1531524141000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+1\n\nDefinitely like it..would require that folks install this plugin before using this JJB so wanna get more approvals."
        },
        {
          "timestamp": 1531536889000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1531754529000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n(2 comments)\n\nThis needs testing somewhere"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "59810b49ca6f23d550c7a467d07da04d9aab2e0c",
          "parents": [
            "9edb84822a5ec8c646fb39780cd1f4f57537a648"
          ],
          "ref": "refs/changes/86/11786/1",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1531523458000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531754529000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531524141000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531523807000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 15,
              "reviewer": ids["agrimberg"],
              "message": "As Thanh mentions, this needs to be moved down so that it\u0027s part of the footer, not floating as part of the message body!",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 16,
              "reviewer": ids["zxiiro"],
              "message": "Move Issue: down one so that it\u0027s attached to the footer.",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 962,
              "reviewer": ids["zxiiro"],
              "message": "I think this will conflict with the publisher that also writes stuff to the build description. I wonder if we can append somehow.",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 962,
              "reviewer": ids["agrimberg"],
              "message": "I think you\u0027re correct that it\u0027s going to conflict with our current use in the lf-infra-ship-logs.\n\n@Trevor can you please verify in a sandbox if we end up with a single one of these defined or if JJB is managing to insert 2 description setters because it\u0027s coming in via XML and both actually work then?",
              "patchSetTimestamp": 1531523458000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
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